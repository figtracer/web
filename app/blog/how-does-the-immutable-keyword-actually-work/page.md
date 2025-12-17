export const metadata = {
title: 'how does the immutable keyword actually work?',
description: "EVM bytecode analysis of Solidity's immutable keyword",
date: '2025-04',
authors: [{ name: 'Gustavo Figueiredo', url: 'https://figtracer.com' }],
}

# how does the immutable keyword actually work?

i had a lot of fun writing about [how the constant keyword actually works](https://figtracer.com/blog/how-does-the-constant-keyword-actually-work) so i decided to unravel how the _immutable_ keyword works!

> i recommend reading [how the constant keyword actually works](https://figtracer.com/blog/how-does-the-constant-keyword-actually-work) before starting this article.

i'm going to use the same tool (_Soler_) that I built to understand these EVM nuances and get a better grip on what we're actually building on top of.

## understanding `immutable`

in Solidity, variables marked as _immutable_ can be assigned a value at construction time. the value can be changed at any time before deployment and then it becomes permanent.

one additional restriction is that _immutable_ variables can only be assigned to inside expressions for which there is no possibility of being executed after creation. this excludes all modifier definitions and functions other than constructors.

unlike _constant_ variables, which are hardcoded into the bytecode at compile time, _immutable_ variables are set during contract deployment and then "locked". this makes them useful for values that need to be determined at deployment time (e.g., an address or a configuration parameter) while still saving gas compared to regular storage variables.

this is our example contract `Immutable.sol`:

```solidity
contract ImmutableTest {
	uint256 public immutable zk = 2;
}
```

## bytecode overview

the bytecode consists of two parts:

- **creation code** (constructor): executed once during deployment to initialize the contract and return the runtime code.
- **runtime code**: the code stored on-chain and executed during transactions.

with `solc --bin <contract.sol>` we can check the bytecode for both: with and without _immutable_.

without the _immutable_ keyword:

```
608060405260025f553480156012575f5ffd5b5060ac80601e5f395ff3fe6080604052348015600e575f5ffd5b50600436106026575f3560e01c8063c91c1f5714602a575b5f5ffd5b60306044565b604051603b9190605f565b60405180910390f35b5f5481565b5f819050919050565b6059816049565b82525050565b5f60208201905060705f8301846052565b9291505056fea264697066735822122022c9e4f3762ad7d36040f0648ad69d86c6eda803f584905fb8ae6ebb6c9ec9af64736f6c634300081c0033
```

with the _immutable_ keyword:

```
60a060405260026080908152503480156016575f5ffd5b5060805160cb61002c5f395f6046015260cb5ff3fe6080604052348015600e575f5ffd5b50600436106026575f3560e01c8063c91c1f5714602a575b5f5ffd5b60306044565b604051603b9190607e565b60405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000081565b5f819050919050565b6078816068565b82525050565b5f602082019050608f5f8301846071565b9291505056fea2646970667358221220efd2afa7b5564e10f6b261be2eab6245d3cf5a7a1ab56ac470d238bab6394f3e64736f6c634300081c0033
```

at first glance, we can see that the bytecode with _immutable_ is visibly larger than the bytecode without it. this may seem contradictory with the idea that _immutable_ makes us save a lot of gas, but we'll see that it's an investment.

## inside the EVM

let's extract the opcodes displayed on the image:

- **without immutable**:

```
0x0005:  PUSH1 0x02   // push the value 2 (zk)onto the stack
0x0007:  PUSH0        // push the value 0 onto the stack
0x0008:  SSTORE       // store 2 in storage slot 0
```

this code stores 2 in storage slot 0 during deployment, making `zk` a regular storage variable.

`zk` is then retrieved using `SLOAD` in the getter (created since it's a `public` variable):

```
0x0063: PUSH0        // push slot 0x00
0x0064: SLOAD        // load value from storage
```

it costs ~2100 gas per `SLOAD` (there's a nuance here, check SLOAD at [evm.codes](https://evm.codes)) which is quite expensive.

- **with immutable**:

```
0x0005:  PUSH1 0x02    // push 2 (zk) onto the stack
0x0007:  PUSH1 0x80    // push 0x80 onto the stack
(...)
0x000b:  MSTORE        // store 0x02 at memory location 0x80
```

then, at runtime, the getter **directly loads the value using `PUSH32`**:

```
PUSH32 0x0...2
```

it costs ~3 gas per `PUSH32` which is really cheap compared to 2100 gas for `SLOAD`.

instead of using `SSTORE` to write to storage, the constructor uses `MSTORE` to temporarily store the value in memory during deployment. the runtime bytecode is then modified to include a `PUSH32` instruction that retrieves the value without needing storage.

as we can see, although _immutable_ variables save gas at runtime, we have to make an investment at deployment. this is because additional `MSTORE` operations are required during deployment, and `PUSH32` instructions take up more space in the final bytecode. however, the savings in execution gas make this a worthwhile trade-off.

## FMPA

another interesting thing we can see right at the start are these instructions:

<table>
  <thead>
    <tr>
      <th></th>
      <th>without immutable</th>
      <th>with immutable</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0x0000</td>
      <td>PUSH1 0x80</td>
      <td>PUSH1 0xA0</td>
    </tr>
    <tr>
      <td>0x0001</td>
      <td>PUSH1 0x40</td>
      <td>PUSH1 0x40</td>
    </tr>
    <tr>
      <td>0x0002</td>
      <td>MSTORE</td>
      <td>MSTORE</td>
    </tr>
  </tbody>
</table>

[read about Solidity's memory layout](https://docs.soliditylang.org/en/latest/internals/layout_in_memory.html)

the address `0x40` is the FMPA (Free Memory Pointer Address) and points to the NFMA (Next Free Memory Address) which is where Solidity can write to.

on the left side (without _immutable_), it will point to SNFMA (Starting Next Free Memory Address - 0x80) which is where free memory usually starts.

on the right side (with _immutable_), the NFMA isn't the SNFMA, but rather, 0xA0 instead! which is exactly 32 bytes of difference from the usual SNFMA. with immutable variables, the constructor uses this memory to compute values, and the NFMA shifts as memory is allocated.

if instead of 1 immutable variable, we had 2 immutable variables, the NFMA (Next Free Memory Address) would be `0xc0`... and so on.

## how the EVM enforces immutability

you may be asking: how does the EVM enforce that an _immutable_ variable can only be written to, one time?

the EVM enforces immutability by not associating an _immutable_ variable with storage at all.
when a contract with _immutable_ variables is deployed, the constructor runs once, during deployment, to **put the value into memory**. instead of storing the value in a **storage slot (SSTORE)**. this ensures that the _immutable_ variable exists in memory only during deployment and is not stored in a modifiable state.

unlike _constant_ variables, which are hardcoded into the bytecode at **compile time**, _immutable_ variables are temporarily stored in memory during deployment. this means:

- the value is **not present in the contract's raw bytecode** before deployment. it is declared, but its value is only assigned at deployment.

- the constructor **modifies the bytecode** to include the _immutable_ value **at a specific offset** before storing the final contract on-chain

## conclusion

this article made me understand that _immutable_ bridges _constant_ and regular variables, being a key part of Solidity for smart contract developers who want to optimize their code!
