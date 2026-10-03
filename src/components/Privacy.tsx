import { Container, SectionTitle } from '@/components/ui'

export function Privacy() {
  return (
    <section className="border-y border-line bg-surface py-24">
      <Container>
        <SectionTitle className="max-w-[720px]">
          Your machine, your data, your call.
        </SectionTitle>
        <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-10">
          <div className="border-t-2 border-accent pt-[22px]">
            <div className="font-display text-[28px] font-bold">Never sudo</div>
            <p className="mt-2.5 text-base text-muted">
              DevHub never asks for your password. If a package needs elevated
              rights, the update fails and the History page shows the real
              error.
            </p>
          </div>
          <div className="border-t-2 border-accent pt-[22px]">
            <div className="font-display text-[28px] font-bold">
              Network only where you ask
            </div>
            <p className="mt-2.5 text-base text-muted">
              DevHub has no account and no analytics. It downloads the Node and
              Ruby release lists once a day, which you can turn off, and it
              talks to GitHub only if you connect an account. The package
              managers it runs talk to the internet as they always do.
            </p>
          </div>
          <div className="border-t-2 border-accent pt-[22px]">
            <div className="font-display text-[28px] font-bold">
              History in a text file
            </div>
            <p className="mt-2.5 text-base text-muted">
              It lives at{' '}
              <span className="font-mono text-sm text-[#d7d7de]">
                ~/Library/Logs/DevHub
              </span>
              . Open it, export it or clear it any time.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
