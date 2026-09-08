# Plan: publish the site on GitHub Pages

## Brief

The remote repo exists and is public, but it holds 0 commits. The local repo
holds 9 commits. Git pruned `origin/main`, so the local branch reports
"upstream is gone". The fix is a first push, not a repair.

The repo also has no deploy workflow. GitHub Pages cannot build a Vite app on
its own, so a workflow must run `npm run build` and upload `dist/`.

## Changes

- Add `.github/workflows/deploy.yml`.
  - It runs on a push to `main` and on a manual trigger.
  - The build job runs `npm ci` and `npm run build`, then uploads `dist/`
    with `actions/upload-pages-artifact`.
  - The deploy job calls `actions/deploy-pages`.
  - Node 24 matches the local version.
- Push `main` to `origin` with `-u` to set the upstream again.

Nothing in the app changes. `base` stays `/`, which is correct for a
`<user>.github.io` repo.

## Manual step for the owner

The token in this session has push rights but not admin rights, so it cannot
turn Pages on. The owner must open
Settings > Pages and set Source to **GitHub Actions**.

## Tests

### Unit

`npm run test` is unchanged. No source file changes.

### Manual

1. Run `npm run build`. The build must pass.
2. Push `main`. Confirm that the 9 commits appear on GitHub.
3. Set the Pages source to GitHub Actions.
4. Open the Actions tab. Confirm that both jobs pass.
5. Open `https://borghese-gladiator.github.io/`. Confirm that the hero
   renders, that the 3D scene loads, and that the theme control works.
6. Open the browser console. Confirm that no asset returns a 404.
