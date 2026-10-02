# devhub.chiefpansancolt.dev

The website for [DevHub](https://github.com/chiefpansancolt/devhub), a free and open source macOS menu bar app that keeps Homebrew, Node and Ruby up to date. It is a single static landing page at https://devhub.chiefpansancolt.dev.

The design is the Landing page artboard in the [devhub-plan](https://github.com/chiefpansancolt/devhub-plan) repository, and the plan for this site is in `docs/landing-page.md` there.

## Stack

Next.js 16 with TypeScript, Tailwind CSS 4, pnpm 10 and Node 24, set up like the other documentation sites. Fonts are Bricolage Grotesque, Hanken Grotesk and JetBrains Mono through `next/font`. The site has no client scripts of its own and adds no analytics. Cloudflare adds its analytics at the edge.

## Development

```bash
pnpm install
pnpm dev          # start the site on http://localhost:3000
pnpm lint         # ESLint
pnpm format       # check formatting (pnpm format:fix writes it)
pnpm build        # production build
```

## How the version is shown

At build time the site reads the latest release of the DevHub repository from the GitHub API and shows its version and DMG size in the hero and the install section. If the request fails, the page still builds and simply leaves the version out. Set `GITHUB_TOKEN` when building to avoid the unauthenticated rate limit. CI does this already.

Because the data is read at build time, run the Deploy workflow again after every DevHub release.

## Deploying

The site is deployed to Vercel by the Deploy workflow, which you start by hand from the Actions tab and which can deploy a preview or production. Automatic Vercel deployments are turned off in `vercel.json`.

One-time setup:

1. Create a Vercel project for this repository.
2. Add the repository secrets `VERCEL_TOKEN`, `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID`.
3. Add the domain `devhub.chiefpansancolt.dev` to the Vercel project and create the DNS record Vercel asks for. The `CNAME` file in this repository holds the domain.

## Content rules

The copy only states what is true of the app. No invented numbers, ratings or testimonials. When the app changes what it says or does, for example when it is notarized, update the matching sections and the mockup in the plan repository first.

## License

MIT. See [LICENSE](LICENSE).
