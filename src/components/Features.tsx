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
            width={1182}
            height={755}
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
            alt="The DevHub popover with the updates for each tool"
            width={360}
            height={471}
            sizes="360px"
            className="block h-auto w-full max-w-[360px] rounded-[14px] border border-edge shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
          />
          <Image
            src="/images/settings.png"
            alt="DevHub settings with the tools, update checks and notifications"
            width={701}
            height={645}
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

export function StandardPackagesFeature() {
  return (
    <section id="standard-packages" className="pb-20">
      <Container className="flex flex-wrap items-center gap-14">
        <div className="flex-[1_1_380px]">
          <Eyebrow>Standard packages</Eyebrow>
          <SectionTitle className="mt-3.5">
            Every new version starts ready.
          </SectionTitle>
          <p className="mt-5 text-muted">
            Keep one list per tool of the packages you always want. Validate
            checks that each one exists and which version would install, and
            says why when something cannot be checked. Install missing fills a
            Node or Ruby version, a package manager or this Mac, and a banner
            offers it when a new Node or Ruby version appears. Nothing installs
            until you choose Install. Export the lists to a file and import them
            on another Mac.
          </p>
        </div>
        <div className="flex-[1.5_1_480px]">
          <Image
            src="/images/standard-packages.png"
            alt="The Standard packages window on the Node tab, with the list of packages and the Node versions that are missing some of them"
            width={783}
            height={701}
            sizes="(min-width: 1240px) 620px, calc(100vw - 80px)"
            className="block h-auto w-full rounded-[14px] border border-line-strong shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
          />
        </div>
      </Container>
    </section>
  )
}

export function NewVersionsFeature() {
  return (
    <section id="new-versions" className="pb-20">
      <Container className="flex flex-wrap-reverse items-center gap-14">
        <div className="flex-[1.5_1_480px]">
          <Image
            src="/images/versions-banner.png"
            alt="The DevHub window on Node with banners offering Node 26.10.0 and 25.9.0, each with Install and Install and set as default"
            width={1181}
            height={760}
            sizes="(min-width: 1240px) 620px, calc(100vw - 80px)"
            className="block h-auto w-full rounded-[14px] border border-line-strong shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
          />
        </div>
        <div className="flex-[1_1_380px]">
          <Eyebrow>New versions</Eyebrow>
          <SectionTitle className="mt-3.5">
            A new Node or Ruby is one click away.
          </SectionTitle>
          <p className="mt-5 text-muted">
            When nvm, fnm, Volta or asdf owns your Node, or rbenv, rvm or asdf
            owns your Ruby, DevHub tells you about a newer version that is not
            installed, including a newer patch of a line you already have.
            Choose Install, or Install and set as default. You can also
            uninstall a version through nvm, fnm, asdf, rbenv or rvm, after a
            confirmation. DevHub checks nodejs.org and ruby-lang.org once a day,
            and a switch in Settings turns that off.
          </p>
        </div>
      </Container>
    </section>
  )
}

export function SyncFeature() {
  return (
    <section id="sync" className="pb-[120px]">
      <Container className="flex flex-wrap items-center gap-14">
        <div className="flex-[1_1_380px]">
          <Eyebrow>Sync</Eyebrow>
          <SectionTitle className="mt-3.5">
            The same lists on every Mac.
          </SectionTitle>
          <p className="mt-5 text-muted">
            Connect GitHub in Settings and DevHub keeps your standard lists in a
            private repository in your account, with one file of package names.
            A name you add on one Mac reaches the others, and a name you remove
            is removed everywhere. You sign in with a code at github.com, so no
            password passes through DevHub, and a sync never installs anything.
            GitHub offers one permission that can create a private repository,
            and it can read all of your private repositories. DevHub uses it for
            that one repository, and you can revoke it at any time.
          </p>
        </div>
        <div className="flex-[1.5_1_480px]">
          <Image
            src="/images/sync.png"
            alt="The Accounts tab in Settings, connected to GitHub, with the repository and the last sync"
            width={701}
            height={649}
            sizes="(min-width: 1240px) 620px, calc(100vw - 80px)"
            className="block h-auto w-full rounded-[14px] border border-line-strong shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
          />
        </div>
      </Container>
    </section>
  )
}
