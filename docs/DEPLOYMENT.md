# Deployment

## Requirements and local checks

- Node.js 22 LTS (Next.js 16.3.4 requires Node.js 20.9 or newer).
- npm and the committed `package-lock.json`.
- Run `npm ci`, `npm run lint`, `npm run typecheck`, and `npm run build` before merging.
- There is no automated test suite or test script in this repository.

## Continuous integration

`.github/workflows/ci.yml` runs on pull requests targeting `main` and pushes to `main`. It uses read-only repository permissions and runs `npm ci`, ESLint, TypeScript, and the production build on Node.js 22. Update both workflow branch filters if the GitHub repository uses a different primary branch. Pull requests are validated only; the workflow does not deploy them.

## Vercel setup

The project has no existing Vercel link or deployment configuration. Import the verified GitHub repository in Vercel and enable the native Git integration. Set the production branch to the repository's primary branch; Vercel then creates preview deployments for pull requests and non-production branches, and production deployments for pushes to the production branch. Use the Next.js framework preset and leave install, build, and output settings at their defaults (`npm install`/Vercel lockfile detection, `next build`, and managed Next.js output) unless the project later needs an override. Do not add a second GitHub Actions deployment job while native Git deployments are enabled.

No `process.env` references were found in the application, so there are currently no required Vercel environment variables. Do not add credentials for the current static demo. If integrations are introduced, add their variable names and purpose here and set secret values in the Vercel project settings.

## Deployments and recovery

- Pull requests and feature branches receive Vercel preview deployments through the Vercel Git integration.
- Merges or pushes to the configured production branch deploy to production. GitHub Actions independently gates code quality but does not currently block Vercel's native deployment; configure a required CI status check in GitHub branch protection if production must wait for CI.
- For a failed build, inspect the failing CI or Vercel build step, reproduce with the local commands above, and check that the lockfile and Node.js version match.
- To recover from a bad production release, use Vercel's Deployments dashboard to promote a known-good deployment or redeploy the previous production commit. Then fix forward through the normal pull request flow.

## Current limitations and setup actions

- This folder currently has no `.git` metadata, verified GitHub remote, Vercel project link, or available authenticated GitHub/Vercel CLI. The repository owner must initialize/connect and push it to the intended GitHub repository, then import that repository into Vercel and choose its actual primary branch.
- All current routes prerender as static pages; vehicle detail pages use static generation. There are no API routes, server actions, middleware/proxy files, database clients, or server environment variables.
- Contact/enquiry forms only update local UI state, dashboard data is hard-coded, and the WhatsApp link uses a placeholder phone number. These features do not persist or deliver production leads.
- Vehicle photos are remote Unsplash URLs rendered with `<img>`. The site does not depend on Next.js image optimization or filesystem persistence. Ensure the external image source remains available.
- ESLint currently reports six `<img>` optimization warnings but no errors.
