import Image from 'next/image'

import { Container } from '@/components/ui'
import { latestReleaseUrl, repoUrl } from '@/lib/site'

const links = [
  { href: '#features', label: 'Features' },
  { href: '#how', label: 'How it works' },
  { href: '#install', label: 'Install' },
  { href: '#faq', label: 'FAQ' },
  { href: repoUrl, label: 'GitHub' },
]

export function Nav() {
  return (
    <header className="border-b border-line">
      <Container className="flex h-[72px] items-center justify-between gap-6">
        <a
          href="#top"
          className="flex items-center gap-3 font-display text-[22px] font-bold tracking-[-0.01em]"
        >
          <Image
            src="/images/icon.png"
            alt=""
            width={34}
            height={34}
            className="rounded-lg"
          />
          <span>DevHub</span>
        </a>
        <nav
          aria-label="Main"
          className="hidden items-center gap-8 text-[15px] text-muted md:flex"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={latestReleaseUrl}
          className="rounded-[10px] bg-accent px-[18px] py-2.5 text-[15px] font-semibold whitespace-nowrap text-accent-ink hover:brightness-110"
        >
          Download
        </a>
      </Container>
    </header>
  )
}
