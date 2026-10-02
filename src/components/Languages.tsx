import { Container, SectionTitle } from '@/components/ui'

const languages = [
  'English',
  'Deutsch',
  'Español',
  'Français',
  'Português (Brasil)',
  'Русский',
  '日本語',
  '한국어',
  '简体中文',
]

export function Languages() {
  return (
    <section className="pt-28 pb-10">
      <Container className="text-center">
        <SectionTitle>Speaks your language.</SectionTitle>
        <p className="mx-auto mt-[18px] max-w-[620px] text-muted">
          Nine languages, with more welcome. The translations have not had a
          native review yet, so corrections are appreciated.
        </p>
        <ul className="mt-9 flex flex-wrap justify-center gap-3">
          {languages.map((language) => (
            <li
              key={language}
              className="rounded-full border border-edge bg-card px-5 py-[9px] text-base"
            >
              {language}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
