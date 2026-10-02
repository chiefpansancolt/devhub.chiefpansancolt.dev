import clsx from 'clsx'
import { type ReactNode } from 'react'

export function Container({
  children,
  className,
  width = 'max-w-[1160px]',
}: {
  children: ReactNode
  className?: string
  width?: string
}) {
  return (
    <div className={clsx('mx-auto px-10', width, className)}>{children}</div>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="text-sm font-semibold tracking-[0.08em] text-accent uppercase">
      {children}
    </div>
  )
}

export function SectionTitle({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <h2
      className={clsx(
        'font-display text-[clamp(30px,3.6vw,46px)] leading-[1.08] font-bold tracking-[-0.02em]',
        className,
      )}
    >
      {children}
    </h2>
  )
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
}: {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
}) {
  return (
    <a
      href={href}
      className={clsx(
        'inline-flex items-center rounded-xl text-[17px] font-semibold hover:brightness-110',
        variant === 'primary'
          ? 'gap-2.5 bg-accent px-[26px] py-[15px] text-accent-ink'
          : 'border border-edge bg-[#1e1e23] px-6 py-3.5 text-ink',
      )}
    >
      {children}
    </a>
  )
}
