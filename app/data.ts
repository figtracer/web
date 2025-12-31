type Project = {
  name: string
  description: string
  link: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  date: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

type Contribution = {
  name: string
  description: string
  link: string
  id: string
}

export const PROJECTS: Project[] = [
  {
    name: 'blob-exex',
    description:
      'blob indexer built with reth exex for reth-native blob processing.',
    link: 'https://exblob.figtracer.com/',
    id: 'project1',
  },
  {
    name: 'stylus-mixer',
    description: 'zero-knowledge mixer written in rust using arbitrum stylus.',
    link: 'https://github.com/figtracer/stylus_mixer',
    id: 'project2',
  },
  {
    name: 'bountypool',
    description:
      'a platform designed to incentivize open-source software development.',
    link: 'https://github.com/figtracer/bountypool',
    id: 'project3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'EthGlobal Prague',
    title: 'hacker',
    date: '2025',
    link: 'https://ethglobal.com/events/prague',
    id: 'work1',
  },
  {
    company: 'EthPrague Conference',
    title: 'volunteer',
    date: '2025',
    link: 'https://ethprague.com',
    id: 'work2',
  },
  {
    company: 'NDC Porto',
    title: 'volunteer',
    date: '2024',
    link: 'https://ndcporto.com',
    id: 'work3',
  },
  {
    company: 'Polygon Porto',
    title: 'volunteer',
    date: '2023',
    link: 'https://polygon.technology',
    id: 'work4',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'how does reth maintain blobs in the txpool?',
    description: "deep dive into reth's blob maintenance mechanisms",
    link: '/blog/how-does-reth-maintain-blobs-in-the-txpool',
    uid: 'blog-1',
  },
  {
    title: 'how do aave supply transactions actually work?',
    description: "understanding aave's supply mechanism at the bytecode level",
    link: '/blog/how-do-aave-supply-transactions-actually-work',
    uid: 'blog-2',
  },
  {
    title: 'how does the constant keyword actually work?',
    description: "evm bytecode analysis of solidity's constant keyword",
    link: '/blog/how-does-the-constant-keyword-actually-work',
    uid: 'blog-3',
  },
  {
    title: 'how does the immutable keyword actually work?',
    description: "evm bytecode analysis of solidity's immutable keyword",
    link: '/blog/how-does-the-immutable-keyword-actually-work',
    uid: 'blog-4',
  },
  {
    title: 'decrypting a upx packed arm iot botnet',
    description: 'reverse engineering analysis of projectybot malware',
    link: '/blog/decrypting-a-upx-packed-arm-iot-botnet',
    uid: 'blog-5',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'github',
    link: 'https://github.com/figtracer',
  },
  {
    label: 'x',
    link: 'https://x.com/figtracer',
  },
  {
    label: 'soundcloud',
    link: 'https://soundcloud.com/limiar/man',
  },
]

export const EMAIL = 'me@figtracer.com'

export const CONTRIBUTIONS: Contribution[] = [
  {
    name: 'reth',
    description:
      'modular, contributor-friendly and blazing-fast rust implementation of the ethereum protocol.',
    link: 'https://github.com/paradigmxyz/reth',
    id: 'contrib1',
  },
  {
    name: 'ethrex',
    description:
      'minimalist, fast and modular rust implementation of the ethereum protocol.',
    link: 'https://github.com/lambdaclass/ethrex',
    id: 'contrib2',
  },
  {
    name: 'inspectifi',
    description:
      'ai chat bot backed by live on-chain data (built with 1inch + blockscout infra). selected by 1inch and blockscout at ethglobal prague 2025.',
    link: 'https://ethglobal.com/showcase/inspectifi-tu6n1',
    id: 'contrib3',
  },
  {
    name: 'auditing',
    description: 'practical smart contract security @cantina.xyz',
    link: 'https://cantina.xyz/u/figtracer',
    id: 'contrib4',
  },
]
