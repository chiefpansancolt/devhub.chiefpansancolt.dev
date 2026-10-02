import { type Metadata, type Viewport } from 'next'
import {
  Bricolage_Grotesque,
  Hanken_Grotesk,
  JetBrains_Mono,
} from 'next/font/google'
import clsx from 'clsx'
import { type ReactNode } from 'react'

import { siteDescription, siteName, siteTitle, siteUrl } from '@/lib/site'

import '@/styles/tailwind.css'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  axes: ['opsz'],
  display: 'swap',
  variable: '--font-bricolage',
})

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-hanken',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteTitle} - keep Homebrew, Node and Ruby up to date`,
    template: `%s - ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    'DevHub',
    'macOS menu bar app',
    'Homebrew updates',
    'npm global packages',
    'Ruby gems',
    'nvm',
    'rbenv',
    'developer tools',
  ],
  authors: [{ name: 'chiefpansancolt', url: 'https://chiefpansancolt.dev' }],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    siteName,
    title: `${siteTitle} - keep Homebrew, Node and Ruby up to date`,
    description: siteDescription,
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteTitle} - keep Homebrew, Node and Ruby up to date`,
    description: siteDescription,
  },
}

export const viewport: Viewport = {
  themeColor: '#131316',
  colorScheme: 'dark',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full antialiased',
        bricolage.variable,
        hanken.variable,
        jetbrains.variable,
      )}
    >
      <body className="bg-bg font-sans text-[17px] leading-[1.6] text-ink">
        {children}
      </body>
    </html>
  )
}
