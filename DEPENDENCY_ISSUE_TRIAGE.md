# Dependency Issue Triage

Source: GitHub security advisory emails received in Gmail between 2026-05-28 and 2026-06-10.

## Reported Issues

| Severity | Dependency | Advisory | Affected file |
| --- | --- | --- | --- |
| Critical | `shell-quote` | CVE-2026-9277 / GHSA-w7jw-789q-3m8p | `package-lock.json` |
| High | `tmp` | CVE-2026-44705 / GHSA-ph9p-34f9-6g65 | `package-lock.json` |
| High | `axios` | CVE-2026-44492 / GHSA-pjwm-pj3p-43mv | `package.json`, `package-lock.json` |
| High | `axios` | Multiple related axios advisories from 2026-05-28 through 2026-06-09 | `package.json`, `package-lock.json` |

## What Needs To Be Done

- Review Dependabot alerts for `axios`, `shell-quote`, and `tmp`.
- Update direct `axios` usage if present, then regenerate `package-lock.json`.
- Update transitive dependency chains for `shell-quote` and `tmp`.
- Run the repo's existing install, test, lint, and build checks before merging.

## Suggestions

- Start with the latest Dependabot alert for `axios`; resolving the direct package may clear several related advisories.
- Use `npm audit` after the dependency updates to verify no advisory remains.
- Check runtime code paths that use axios for behavior changes around proxy, redirect, and header handling.
