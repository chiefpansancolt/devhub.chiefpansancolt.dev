import { Container, SectionTitle } from '@/components/ui'

export const faqs = [
  {
    question: 'Is DevHub free?',
    answer:
      'Yes. It is open source under the MIT license, and you can read every line of it on GitHub.',
  },
  {
    question: 'Why does macOS block it the first time?',
    answer:
      'The app is signed ad hoc and is not notarized yet, because notarization needs an Apple Developer account. After you approve it once, it opens like any other app.',
  },
  {
    question: 'Which tools does it support?',
    answer:
      'Homebrew formulae and casks, Node global packages from npm, pnpm, Bun and Yarn 1, Ruby gems, Rust toolchains and Cargo tools, and Python tools from pipx and uv.',
  },
  {
    question: 'Does it use sudo or ask for my password?',
    answer:
      'No. It runs everything as you. If a package needs elevated rights, the update fails and the History page keeps the full output so you can fix the cause.',
  },
  {
    question: 'Which Node and Ruby versions does it see?',
    answer:
      'Those installed with nvm, fnm, Volta or asdf for Node, and RVM, rbenv, chruby or asdf for Ruby. The macOS system Ruby is left out because its gems need sudo. If yours live somewhere else, choose the folder in Settings.',
  },
  {
    question: 'Can it install or remove a Node or Ruby version?',
    answer:
      "Yes, through the version manager you already use. DevHub offers a newer version that is not installed and runs the manager's own install command, with or without making it the default. It can uninstall a version through nvm, fnm, asdf, rbenv or rvm, after a confirmation. Volta, chruby and custom folders are not supported for uninstalling.",
  },
  {
    question: 'Does it send anything anywhere?',
    answer:
      "Only when you ask or switch it on. DevHub checks nodejs.org and ruby-lang.org once a day for new Node and Ruby versions, and you can turn that off in Settings. If you connect a GitHub account, it uploads the names in your standard lists to a private repository. It sends no analytics and has no account of its own. Your settings stay in the app's preferences and your history stays in a file on your Mac.",
  },
  {
    question: 'What can the GitHub connection access?',
    answer:
      'Only the names in your standard lists are uploaded, to a private repository named devhub-standard-packages in your account. To create a private repository, GitHub requires its repo permission, which can read and write all of your private repositories. DevHub uses it for that one repository, keeps the token in your keychain and never uploads installed packages. You can revoke the access at any time at github.com/settings/applications.',
  },
  {
    question: 'Does syncing install anything?',
    answer:
      'No. A sync only changes your lists. Packages install only when you choose Install.',
  },
  {
    question: 'Which Macs does it run on?',
    answer: 'macOS 15 Sequoia or newer, on Apple Silicon or Intel.',
  },
]

export function Faq() {
  return (
    <section id="faq" className="border-t border-line bg-surface py-28">
      <Container width="max-w-[860px]">
        <SectionTitle>Questions</SectionTitle>
        <div className="mt-10 flex flex-col border-b border-line-strong">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="border-t border-line-strong py-[26px]"
            >
              <h3 className="font-display text-xl font-bold">{faq.question}</h3>
              <p className="mt-2.5 text-base text-muted">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
