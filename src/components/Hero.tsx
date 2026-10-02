import Image from 'next/image'

import { DownloadIcon } from '@/components/icons'
import { ButtonLink, Container } from '@/components/ui'
import { type Release } from '@/lib/release'
import { latestReleaseUrl, repoUrl } from '@/lib/site'

export function Hero({ release }: { release: Release | null }) {
  const version = release
    ? `Version ${release.version}${release.dmgSize ? ` (${release.dmgSize})` : ''}. `
    : ''

  return (
    <section id="top" className="pt-[88px] pb-[120px]">
      <Container>
        <div className="max-w-[820px]">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-[#18181c] px-3.5 py-1.5 text-sm text-muted">
            <span className="size-2 rounded-full bg-accent" />
            <span>Free and open source. macOS 15 or newer.</span>
          </div>
          <h1 className="mt-7 font-display text-[clamp(40px,6.2vw,80px)] leading-[1.02] font-extrabold tracking-[-0.03em]">
            Keep Homebrew, Node and Ruby up to date from your menu bar.
          </h1>
          <p className="mt-7 max-w-[680px] text-xl leading-[1.55] text-muted">
            DevHub finds what is outdated across your Mac, including every Node
            and Ruby version you have installed, and updates it in a click.
            Every command it runs is written to a history you can read.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3.5">
            <ButtonLink href={latestReleaseUrl}>
              <DownloadIcon />
              <span>Download for macOS</span>
            </ButtonLink>
            <ButtonLink href={repoUrl} variant="secondary">
              View on GitHub
            </ButtonLink>
          </div>
          <p className="mt-5 text-sm text-faint">
            {version}Apple Silicon and Intel. MIT license. Not notarized yet, so
            macOS asks you to approve it once.{' '}
            <a
              href="#install"
              className="text-accent underline underline-offset-[3px]"
            >
              See how
            </a>
            .
          </p>
        </div>

        <div className="relative mt-[72px]">
          <Image
            src="/images/window.png"
            alt="The DevHub window listing outdated Homebrew packages, with a sidebar for Homebrew, Node and Ruby versions"
            width={1181}
            height={759}
            sizes="(min-width: 1240px) 1080px, calc(100vw - 80px)"
            priority
            className="block h-auto w-full rounded-[14px] border border-line-strong shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
          />
          <Image
            src="/images/popover.png"
            alt="The DevHub menu bar popover showing 331 updates"
            width={364}
            height={278}
            sizes="324px"
            className="absolute -bottom-14 -left-7 hidden h-auto w-[30%] rounded-[14px] border border-edge shadow-[0_30px_70px_rgba(0,0,0,0.65)] md:block"
          />
        </div>
      </Container>
    </section>
  )
}
