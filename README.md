# Vercel Hono Monorepo Example

I cannot get this repo to deploy to Vercel. 
Build fails when it tries to reference the internal package `@repo/core`

1. Fork this repo
2. Create project for repo in Vercel:
https://vercel.com/new/import?s=https%3A%2F%2Fgithub.com%2Fptts%2Fvercel-monorepo-test&project-name=vercel-monorepo-test-api

Select `apps/api` as root dir.

3. Clome this repo

4. Run commands and follow steps
```
pnpm install
pnpm exec vercel link --repo
pnpm -F @repo/api run vercel build
```

5. Deploy
```
pnpm -F @repo/api run vercel deploy
```