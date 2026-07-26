# Next.js starter for Railway

A Next.js App Router starter whose lockfile passes Railway's vulnerability gate, so
the deployment actually starts.

## Why this exists

Railway refuses to build a project whose lockfile contains a HIGH-severity advisory.
The official Next.js template on Railway pins `next@15.2.7`, and that is what the
builder says about it:

```
==============================================================================
SECURITY VULNERABILITIES DETECTED
==============================================================================

Railway cannot proceed with deployment due to security vulnerabilities in your
project's dependencies.

Found 1 vulnerable package(s):

  next@15.2.7
      Source: pnpm-lock.yaml
      Severity: HIGH
      Upgrade to 15.2.8: pnpm add next@^15.2.8

      Vulnerabilities:
      - CVE-2025-67779 (HIGH)
```

The build never runs. It also pins React to a dated release candidate
(`19.0.0-rc-69d4b800-20241021`), which no longer resolves against current Next:

```
npm error code ERESOLVE
npm error Found: react@19.0.0-rc-69d4b800-20241021
```

This starter ships current Next and React **and** a lockfile audited clean:

```
$ npm audit --audit-level=high
found 0 vulnerabilities
```

Getting to zero takes two `overrides` — current Next still resolves `postcss` and
`sharp` to versions carrying HIGH advisories of their own, so they are pinned forward
in `package.json`. Without that, a fresh Next install trips the same gate.

## What's in here

| File | Why it exists |
|------|---------------|
| `app/` | App Router: a landing page and `/api/health` |
| `package.json` | Next 16, React 19 stable, plus `overrides` that keep the audit clean |
| `package-lock.json` | Committed, so `npm ci` reproduces the audited tree |
| `next.config.ts` | Left at defaults — `output: "standalone"` is incompatible with `next start`, which is what the builder runs |
| `railway.json` | Health check on `/api/health` |

## Run locally

```bash
npm ci
npm run dev     # http://localhost:3000
```

Production build:

```bash
npm run build && npm start
```

## Keeping it deployable

When you add packages, commit the updated lockfile and check it before pushing:

```bash
npm audit --audit-level=high
```

If that reports anything, Railway will refuse the build for the same reason the
upstream template fails.

## License

MIT
