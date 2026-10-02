import Image from 'next/image'

import { Container, Eyebrow, SectionTitle } from '@/components/ui'

export function WindowFeature() {
  return (
    <section id="features" className="pt-[120px] pb-10">
      <Container className="flex flex-wrap items-center gap-14">
        <div className="flex-[1_1_380px]">
          <Eyebrow>One window</Eyebrow>
          <SectionTitle className="mt-3.5">
            Everything outdated, sorted by where it lives.
          </SectionTitle>
          <p className="mt-5 text-muted">
            A sidebar filters by tool, by Node version and by Ruby version, so a
            global package that is old in one Node and current in another is
            never hidden. Switch between what needs an update and everything
            installed, open the details pane for the path, disk size and
            dependents, and update or uninstall from the same row.
          </p>
        </div>
        <div className="flex-[1.5_1_480px]">
          <Image
            src="/images/window.png"
            alt="The DevHub window with the Node and Ruby versions in the sidebar"
            width={1181}
            height={759}
            sizes="(min-width: 1240px) 620px, calc(100vw - 80px)"
            className="block h-auto w-full rounded-[14px] border border-line-strong shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
          />
        </div>
      </Container>
    </section>
  )
}

export function MenuBarFeature() {
  return (
    <section className="pt-20 pb-[120px]">
      <Container className="flex flex-wrap-reverse items-center gap-14">
        <div className="flex flex-[1.2_1_420px] flex-wrap items-start justify-center gap-7">
          <Image
            src="/images/popover.png"
            alt="The DevHub popover with counts for Homebrew, Node and Ruby"
            width={364}
            height={278}
            sizes="360px"
            className="block h-auto w-full max-w-[360px] rounded-[14px] border border-edge shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
          />
          <Image
            src="/images/settings.png"
            alt="DevHub settings with the tools, update checks and notifications"
            width={599}
            height={647}
            sizes="330px"
            className="block h-auto w-full max-w-[330px] rounded-[14px] border border-edge shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
          />
        </div>
        <div className="flex-[1_1_380px]">
          <Eyebrow>Always at hand</Eyebrow>
          <SectionTitle className="mt-3.5">
            The count is one glance away.
          </SectionTitle>
          <p className="mt-5 text-muted">
            The popover groups updates by tool. Update one package, update
            everything, or open the full window. Show an icon, an icon with the
            count, or only the count, and decide how often DevHub checks and
            what it tells you.
          </p>
        </div>
      </Container>
    </section>
  )
}
