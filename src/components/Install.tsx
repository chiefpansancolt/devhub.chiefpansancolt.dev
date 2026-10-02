import { type ReactNode } from 'react'

import { DownloadIcon } from '@/components/icons'
import { ButtonLink, Container, Eyebrow, SectionTitle } from '@/components/ui'
import { type Release } from '@/lib/release'
import { latestReleaseUrl } from '@/lib/site'

const steps = [
  {
    title: 'Download',
    text: 'Get the latest DMG from the releases page. It is a universal build for Apple Silicon and Intel.',
  },
  {
    title: 'Drag to Applications',
    text: 'Open the DMG, drag DevHub into Applications and open it. A package icon appears in your menu bar.',
  },
  {
    title: 'Approve it once',
    text: 'DevHub is not notarized yet. Open System Settings, then Privacy and Security, and choose Open Anyway next to DevHub.',
  },
]

function Prompt() {
  return <span className="text-accent">$</span>
}

function CodeCard({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="min-w-0 flex-[1_1_420px] rounded-2xl border border-line-strong bg-code px-[26px] py-6">
      <div className="mb-3 text-sm text-faint">{label}</div>
      <pre className="overflow-x-auto font-mono text-sm leading-[1.8] whitespace-pre text-[#d7d7de]">
        {children}
      </pre>
    </div>
  )
}

export function Install({ release }: { release: Release | null }) {
  return (
    <section id="install" className="pt-28 pb-[120px]">
      <Container>
        <div className="max-w-[680px]">
          <Eyebrow>Install</Eyebrow>
          <SectionTitle className="mt-3.5">
            Up and running in a minute.
          </SectionTitle>
        </div>
        <ol className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-2xl border border-line-strong bg-card p-7"
            >
              <div className="flex size-9 items-center justify-center rounded-full bg-accent font-bold text-accent-ink">
                {index + 1}
              </div>
              <h3 className="mt-[18px] font-display text-[21px] font-bold">
                {step.title}
              </h3>
              <p className="mt-2.5 text-base text-muted">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-wrap gap-5">
          <CodeCard label="Prefer the terminal?">
            <Prompt /> xattr -dr com.apple.quarantine /Applications/DevHub.app
          </CodeCard>
          <CodeCard label="Or build it from source">
            <Prompt /> brew install xcodegen
            {'\n'}
            <Prompt /> git clone https://github.com/chiefpansancolt/devhub.git
            {'\n'}
            <Prompt /> cd devhub &amp;&amp; make run
          </CodeCard>
        </div>

        <div className="mt-10">
          <ButtonLink href={latestReleaseUrl}>
            <DownloadIcon />
            <span>Download DevHub{release ? ` ${release.version}` : ''}</span>
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
