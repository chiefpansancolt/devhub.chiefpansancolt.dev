import Link from 'next/link'

import { Container } from '@/components/ui'

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center">
      <Container className="text-center">
        <p className="text-sm font-semibold tracking-[0.08em] text-accent uppercase">
          404
        </p>
        <h1 className="mt-3.5 font-display text-5xl font-bold tracking-[-0.02em]">
          This page does not exist.
        </h1>
        <Link
          href="/"
          className="mt-8 inline-block rounded-xl bg-accent px-6 py-3.5 text-[17px] font-semibold text-accent-ink hover:brightness-110"
        >
          Back to DevHub
        </Link>
      </Container>
    </main>
  )
}
