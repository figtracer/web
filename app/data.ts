type Project = {
  name: string
  description: string
  link: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
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
      'Blob indexer built with reth exex for reth-native blob processing.',
    link: 'https://exblob.figtracer.com/',
    id: 'project1',
  },
  {
    name: 'stylus-mixer',
    description: 'Zero-knowledge mixer written in Rust using Arbitrum Stylus.',
    link: 'https://github.com/figtracer/stylus-mixer',
    id: 'project2',
  },
  {
    name: 'bountypool',
    description:
      'A platform designed to incentivize open-source software development.',
    link: 'https://github.com/figtracer/bountypool',
    id: 'project3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'EthGlobal Prague',
    title: 'Hacker',
    start: '2025',
    end: '2025',
    link: 'https://ethglobal.com/events/prague',
    id: 'work1',
  },
  {
    company: 'EthPrague Conference',
    title: 'Volunteer',
    start: '2025',
    end: '2025',
    link: 'https://ethprague.com',
    id: 'work2',
  },
  {
    company: 'NDC Porto',
    title: 'Crew Member',
    start: '2024',
    end: '2024',
    link: 'https://ndcporto.com',
    id: 'work3',
  },
  {
    company: 'Polygon Porto',
    title: 'Volunteer',
    start: '2023',
    end: '2023',
    link: 'https://polygon.technology',
    id: 'work4',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'how does reth maintain blobs in the txpool?',
    description: "Deep dive into Reth's blob maintenance mechanisms",
    link: '/blog/how-does-reth-maintain-blobs-in-the-txpool',
    uid: 'blog-1',
  },
  {
    title: 'how do aave supply transactions actually work?',
    description: "Understanding AAVE's supply mechanism at the bytecode level",
    link: '/blog/how-do-aave-supply-transactions-actually-work',
    uid: 'blog-2',
  },
  {
    title: 'how does the constant keyword actually work?',
    description: "EVM bytecode analysis of Solidity's constant keyword",
    link: '/blog/how-does-the-constant-keyword-actually-work',
    uid: 'blog-3',
  },
  {
    title: 'how does the immutable keyword actually work?',
    description: "EVM bytecode analysis of Solidity's immutable keyword",
    link: '/blog/how-does-the-immutable-keyword-actually-work',
    uid: 'blog-4',
  },
  {
    title: 'decrypting a upx packed arm iot botnet',
    description: 'Reverse engineering analysis of ProjectYBot malware',
    link: '/blog/decrypting-a-upx-packed-arm-iot-botnet',
    uid: 'blog-5',
  },
  {
    title: 'a note on helplessness',
    description: 'Personal reflections on competition and collaboration',
    link: '/blog/a-note-on-helplessness',
    uid: 'blog-8',
  },
  {
    title: 'two swords',
    description: 'Reflections on time, perspective, and human connection',
    link: '/blog/two-swords',
    uid: 'blog-9',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/figtracer',
  },
  {
    label: 'X',
    link: 'https://x.com/figtracer',
  },
  {
    label: 'SoundCloud',
    link: 'https://soundcloud.com/limiar/man',
  },
]

export const EMAIL = 'gustavo@figtracer.com'

export const CONTRIBUTIONS: Contribution[] = [
  {
    name: 'reth',
    description:
      'Modular, contributor-friendly and blazing-fast Rust implementation of the Ethereum protocol.',
    link: 'https://github.com/paradigmxyz/reth',
    id: 'contrib1',
  },
  {
    name: 'ethrex',
    description:
      'Minimalist, fast and modular Rust implementation of the Ethereum protocol.',
    link: 'https://github.com/lambdaclass/ethrex',
    id: 'contrib2',
  },
  {
    name: 'inspectifi',
    description:
      'AI chat bot backed by live on-chain data (built with 1inch + Blockscout infra). Selected by 1inch and Blockscout at EthGlobal Prague 2025.',
    link: 'https://ethglobal.com/showcase/inspectifi-tu6n1',
    id: 'contrib3',
  },
]
