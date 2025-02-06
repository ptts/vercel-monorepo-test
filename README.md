# Vercel Hono Monorepo Example

I cannot get this repo to deploy to Vercel. 
Build fails when it tries to reference the internal package `@repo/core`.

1. Fork this repo
2. Create project for repo in Vercel (select your forked repo):
https://vercel.com/new/import

Select `apps/api` as root dir.

3. Clone your forked repo

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