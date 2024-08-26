**Installing:**

0. npm i

**First error:**
1. npm run dev:turbo
2. see error related with `minimumCacheTTL` (in terminal)

**Second error:**
1. comment `minimumCacheTTL` in `nextConfig.images` (in `next.config.mjs`)
2. npm run dev:turbo
3. open http://localhost:3000/
4. see error related with `icon.ico` (in browser)
