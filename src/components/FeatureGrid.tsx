import { type ReactNode } from 'react'

import {
  BellIcon,
  ChipIcon,
  ClockIcon,
  GlobeIcon,
  KeyboardIcon,
  LayersIcon,
  LockIcon,
  MoonIcon,
  RefreshIcon,
} from '@/components/icons'
import { Container, SectionTitle } from '@/components/ui'

const features: { icon: ReactNode; title: string; text: string }[] = [
  {
    icon: <RefreshIcon />,
    title: 'Update one, some or all',
    text: 'Update a package, a selection or everything, with a confirmation you can turn off. Cancel at any point.',
  },
  {
    icon: <LayersIcon />,
    title: 'Watch it work',
    text: 'A progress strip shows the package running, how many are done and how long it has been going. The output log streams what the tool prints.',
  },
  {
    icon: <ChipIcon />,
    title: 'Node updates that fit your Node',
    text: "npm installs a version your Node cannot run and only prints a warning. DevHub reads each version's engine range and installs the newest one your Node supports.",
  },
  {
    icon: <ClockIcon />,
    title: 'A history of everything',
    text: 'Every check, update and uninstall is saved with its command, exit code and output, in a plain text file you own. Filter it, export it, keep it as long as you like.',
  },
  {
    icon: <BellIcon />,
    title: 'Notifications on your terms',
    text: 'Hear about every update, get a daily summary, or only major versions. Checks run on a schedule, when DevHub opens, and when the Mac wakes.',
  },
  {
    icon: <KeyboardIcon />,
    title: 'Keyboard first',
    text: 'A shortcut for every action, arrow keys through the lists, and VoiceOver labels on every row.',
  },
  {
    icon: <GlobeIcon />,
    title: 'Nine languages',
    text: 'Pick your language in Settings. The layout mirrors for right-to-left languages.',
  },
  {
    icon: <MoonIcon />,
    title: 'Light and dark',
    text: 'Follows your system, or stays on the setting you choose.',
  },
  {
    icon: <LockIcon />,
    title: 'Private by design',
    text: 'No account, no analytics, and no network requests of its own. It never uses sudo.',
  },
]

export function FeatureGrid() {
  return (
    <section className="border-y border-line bg-surface py-28">
      <Container>
        <div className="max-w-[680px]">
          <SectionTitle>Made for people who live in a terminal.</SectionTitle>
          <p className="mt-[18px] text-muted">
            It does the boring part of keeping a development machine current,
            and shows its work.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-line-strong bg-card p-7"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-accent/[0.13] text-accent">
                {feature.icon}
              </div>
              <h3 className="mt-5 font-display text-[21px] font-bold">
                {feature.title}
              </h3>
              <p className="mt-2.5 text-base text-muted">{feature.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
