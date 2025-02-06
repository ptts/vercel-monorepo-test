# Vercel Hono Monorepo Example

I cannot get this repo to deploy to Vercel. 
Build fails when it tries to reference the internal package `@repo/core`

```
pnpm i
pnpm -F @repo/api vercel build
```