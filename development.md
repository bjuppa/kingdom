# Kingdom Development

### Development setup
`npm install`

### Build during development
`npm run dev` starts the Nuxt development server.

### Generate static documentation site
`npm run generate` builds the static documentation from `/nuxt` into `/docs` for deploy on GitHub Pages.
Anything pushed to the `master` branch will be live on https://bjuppa.github.io/kingdom/

### Release new version
1. Tag a new version locally using [`npm version ...`](https://docs.npmjs.com/cli/version)
2. Publish the new version using [`npm publish`](https://docs.npmjs.com/getting-started/publishing-npm-packages#how-to-update-the-version-number)
3. Push with tags to git using `git push --tags`
4. Find and edit the release notes on [GitHub](https://github.com/bjuppa/kingdom/releases)
