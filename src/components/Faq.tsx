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
    question: 'Does it send anything anywhere?',
    answer:
      "No. DevHub has no network code. Your settings stay in the app's preferences and your history stays in a file on your Mac.",
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
