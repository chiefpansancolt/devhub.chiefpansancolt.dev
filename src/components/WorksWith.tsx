import { Container } from '@/components/ui'

const tools = [
  'Homebrew',
  'npm',
  'pnpm',
  'Bun',
  'Yarn',
  'RubyGems',
  'rustup',
  'Cargo',
  'pipx',
  'uv',
  'nvm',
  'fnm',
  'Volta',
  'asdf',
  'RVM',
  'rbenv',
  'chruby',
]

export function WorksWith() {
  return (
    <section className="border-y border-line bg-surface">
      <Container className="flex flex-wrap items-center gap-x-7 gap-y-3.5 py-9">
        <span className="text-sm tracking-[0.08em] text-faint uppercase">
          Works with
        </span>
        <ul className="flex flex-wrap gap-2.5">
          {tools.map((tool) => (
            <li
              key={tool}
              className="rounded-lg bg-chip px-3.5 py-1.5 font-mono text-sm"
            >
              {tool}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
