import { Container, Eyebrow, SectionTitle } from '@/components/ui'

const points = [
  'Each Node and Ruby version uses its own npm and gem.',
  'One Homebrew command at a time, because Homebrew locks its files.',
  'A failed command shows its real output and exit code, and Try again runs it once more.',
  'Installs and uninstalls only run when you choose them, and a sync only changes your lists.',
]

function Prompt() {
  return <span className="text-accent">$</span>
}

function Comment({ children }: { children: string }) {
  return <span className="text-[#6c6c76]"># {children}</span>
}

export function HowItWorks() {
  return (
    <section id="how" className="py-[120px]">
      <Container className="flex flex-wrap items-center gap-14">
        <div className="flex-[1_1_380px]">
          <Eyebrow>How it works</Eyebrow>
          <SectionTitle className="mt-3.5">
            It runs the tools you already have.
          </SectionTitle>
          <p className="mt-5 text-muted">
            No private index and no background service. DevHub runs your own
            brew, npm, gem, rustup, cargo, pipx and uv, using the right version
            of each, and reads what they print.
          </p>
          <ol className="mt-6 flex flex-col gap-3.5 text-base text-soft">
            {points.map((point, index) => (
              <li key={point} className="flex gap-3">
                <span className="font-bold text-accent">{index + 1}</span>
                <span>{point}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="flex-[1.2_1_440px] overflow-hidden rounded-2xl border border-line-strong bg-code">
          <div className="flex items-center gap-2 border-b border-line px-[18px] py-3.5">
            <span className="size-[11px] rounded-full bg-[#3a3a42]" />
            <span className="size-[11px] rounded-full bg-[#3a3a42]" />
            <span className="size-[11px] rounded-full bg-[#3a3a42]" />
            <span className="ml-2.5 font-mono text-[13px] text-faint">
              What DevHub runs
            </span>
          </div>
          <pre className="overflow-x-auto px-[26px] py-6 font-mono text-[14.5px] leading-[1.85] whitespace-pre text-[#d7d7de]">
            <Comment>Homebrew</Comment>
            {'\n'}
            <Prompt /> brew outdated --json=v2
            {'\n'}
            <Prompt /> brew upgrade &lt;name&gt;
            {'\n\n'}
            <Comment>Node, once per installed version</Comment>
            {'\n'}
            <Prompt /> npm outdated -g --json
            {'\n'}
            <Prompt /> npm install -g &lt;name&gt;@&lt;version&gt;
            {'\n\n'}
            <Comment>Ruby, once per installed version</Comment>
            {'\n'}
            <Prompt /> gem outdated
            {'\n'}
            <Prompt /> gem update &lt;name&gt; --no-document
            {'\n\n'}
            <Comment>Rust</Comment>
            {'\n'}
            <Prompt /> rustup check
            {'\n'}
            <Prompt /> cargo install --list
            {'\n\n'}
            <Comment>Python</Comment>
            {'\n'}
            <Prompt /> pipx list --json
            {'\n'}
            <Prompt /> uv tool list --outdated
            {'\n\n'}
            <Comment>New versions, through your version manager</Comment>
            {'\n'}
            <Prompt /> nvm install &lt;version&gt;
            {'\n'}
            <Prompt /> rbenv install &lt;version&gt;
          </pre>
        </div>
      </Container>
    </section>
  )
}
