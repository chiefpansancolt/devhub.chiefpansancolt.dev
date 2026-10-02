import { latestReleaseUrl } from '@/lib/site'

export type Release = {
  version: string
  url: string
  dmgSize: string | null
}

type GitHubRelease = {
  tag_name: string
  html_url: string
  assets: { name: string; size: number }[]
}

const endpoint =
  'https://api.github.com/repos/chiefpansancolt/devhub/releases/latest'

function formatSize(bytes: number) {
  return `${(bytes / 1_000_000).toFixed(1)} MB`
}

/**
 * Reads the latest published release when the site is built. Any failure
 * returns null, so a build never depends on GitHub being reachable.
 */
export async function getLatestRelease(): Promise<Release | null> {
  try {
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github+json',
    }
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
    }
    const response = await fetch(endpoint, { headers, cache: 'force-cache' })
    if (!response.ok) return null

    const release = (await response.json()) as GitHubRelease
    const dmg = release.assets.find((asset) => asset.name.endsWith('.dmg'))
    return {
      version: release.tag_name.replace(/^v/, ''),
      url: release.html_url || latestReleaseUrl,
      dmgSize: dmg ? formatSize(dmg.size) : null,
    }
  } catch {
    return null
  }
}
