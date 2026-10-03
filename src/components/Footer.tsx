import Image from 'next/image'

import { Container } from '@/components/ui'
import {
  authorUrl,
  changelogUrl,
  issuesUrl,
  licenseUrl,
  releasesUrl,
  repoUrl,
  securityUrl,
} from '@/lib/site'

const groups = [
  {
    title: 'Project',
    links: [
      { label: 'Releases', href: releasesUrl },
      { label: 'Changelog', href: changelogUrl },
      { label: 'Source code', href: repoUrl },
      { label: 'Report an issue', href: issuesUrl },
    ],
  },
  {
    title: 'Support',
    links: [
      {
        label: 'GitHub Sponsors',
        href: 'https://github.com/sponsors/chiefpansancolt',
      },
      { label: 'Ko-fi', href: 'https://ko-fi.com/chiefpansancolt' },
      { label: 'Patreon', href: 'https://patreon.com/chiefpansancolt' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'MIT License', href: licenseUrl },
      { label: 'Security', href: securityUrl },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-line pt-16 pb-12">
      <Container className="flex flex-wrap justify-between gap-10">
        <div className="max-w-[360px]">
          <div className="flex items-center gap-3 font-display text-[22px] font-bold">
            <Image
              src="/images/icon.png"
              alt=""
              width={34}
              height={34}
              className="rounded-lg"
            />
            <span>DevHub</span>
          </div>
          <p className="mt-3.5 text-[15px] text-faint">
            A menu bar updater for Homebrew, Node, Ruby, Rust and Python.
          </p>
        </div>
        <div className="flex flex-wrap gap-14 text-[15px]">
          {groups.map((group) => (
            <div key={group.title} className="flex flex-col gap-2.5">
              <div className="text-[13px] tracking-[0.08em] text-faint uppercase">
                {group.title}
              </div>
              {group.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-soft hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </Container>
      <Container className="mt-12 border-t border-line pt-6 text-sm text-faint">
        <span>Copyright 2026 Christopher Pezza. Built by </span>
        <a
          href={authorUrl}
          className="text-soft underline underline-offset-[3px] hover:text-ink"
        >
          chiefpansancolt
        </a>
        <span>.</span>
      </Container>
    </footer>
  )
}
