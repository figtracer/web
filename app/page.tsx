'use client'
import { motion, useScroll, useTransform } from 'motion/react'
import { Magnetic } from '@/components/ui/magnetic'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
} from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

function ScrollReveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

function GithubSection() {
  return (
    <a
      href="https://github.com/figtracer"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition-all duration-300 hover:border-zinc-300 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/80"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-zinc-700/20" />
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </div>
          <div>
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">
              @figtracer
            </h4>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              projects, contributions, and everything else
            </p>
          </div>
        </div>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-zinc-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-zinc-500"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </a>
  )
}

export default function Personal() {
  const { scrollYProgress } = useScroll()
  const orbY1 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const orbY2 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const orbY3 = useTransform(scrollYProgress, [0, 1], [0, -250])

  return (
    <>
      {/* Animated background orbs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-zinc-300/30 blur-3xl dark:bg-zinc-600/15"
          style={{ y: orbY1 }}
        />
        <motion.div
          className="absolute -right-24 top-1/2 h-96 w-96 rounded-full bg-zinc-200/25 blur-3xl dark:bg-zinc-500/10"
          style={{ y: orbY2 }}
        />
        <motion.div
          className="absolute left-1/3 top-3/4 h-64 w-64 rounded-full bg-zinc-300/20 blur-3xl dark:bg-zinc-600/10"
          style={{ y: orbY3 }}
        />
      </div>

      <motion.main
        className="space-y-24"
        variants={VARIANTS_CONTAINER}
        initial="hidden"
        animate="visible"
      >
        <motion.section
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <GithubSection />
        </motion.section>

        <ScrollReveal>
          <section>
            <h3 className="mb-3 text-lg font-medium">blog</h3>
            <div className="flex flex-col space-y-0">
              <AnimatedBackground
                enableHover
                className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
                transition={{
                  type: 'spring',
                  bounce: 0,
                  duration: 0.2,
                }}
              >
                {BLOG_POSTS.map((post) => (
                  <Link
                    key={post.uid}
                    className="-mx-3 rounded-xl px-3 py-3"
                    href={post.link}
                    data-id={post.uid}
                  >
                    <div className="flex flex-col space-y-1">
                      <h4 className="font-normal dark:text-zinc-100">
                        {post.title}
                      </h4>
                      <p className="text-zinc-500 dark:text-zinc-400">
                        {post.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </AnimatedBackground>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section>
            <h3 className="mb-5 text-lg font-medium">connect</h3>
            <p className="mb-5 text-zinc-600 dark:text-zinc-400">
              feel free to contact me at{' '}
              <a
                className="underline dark:text-zinc-300"
                href={`mailto:${EMAIL}`}
              >
                {EMAIL}
              </a>
            </p>
            <div className="flex items-center justify-start space-x-3">
              {SOCIAL_LINKS.map((link) => (
                <MagneticSocialLink key={link.label} link={link.link}>
                  {link.label}
                </MagneticSocialLink>
              ))}
            </div>
          </section>
        </ScrollReveal>
      </motion.main>
    </>
  )
}
