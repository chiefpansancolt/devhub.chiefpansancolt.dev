import { Faq, faqs } from '@/components/Faq'
import { FeatureGrid } from '@/components/FeatureGrid'
import { MenuBarFeature, WindowFeature } from '@/components/Features'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { HowItWorks } from '@/components/HowItWorks'
import { Install } from '@/components/Install'
import { Languages } from '@/components/Languages'
import { Nav } from '@/components/Nav'
import { Privacy } from '@/components/Privacy'
import { WorksWith } from '@/components/WorksWith'
import { getLatestRelease } from '@/lib/release'
import {
  latestReleaseUrl,
  licenseUrl,
  repoUrl,
  siteDescription,
  siteUrl,
} from '@/lib/site'

export default async function Home() {
  const release = await getLatestRelease()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'DevHub',
        description: siteDescription,
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'macOS 15 or later',
        url: siteUrl,
        downloadUrl: latestReleaseUrl,
        codeRepository: repoUrl,
        license: licenseUrl,
        image: `${siteUrl}/images/window.png`,
        ...(release ? { softwareVersion: release.version } : {}),
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        author: {
          '@type': 'Person',
          name: 'Christopher Pezza',
          url: 'https://chiefpansancolt.dev',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  }

  return (
    <div className="w-full overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <Hero release={release} />
        <WorksWith />
        <WindowFeature />
        <MenuBarFeature />
        <FeatureGrid />
        <HowItWorks />
        <Privacy />
        <Languages />
        <Install release={release} />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}
