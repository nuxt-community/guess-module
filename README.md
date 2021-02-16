# guess-module

[![David-DM][david-dm-src]][david-dm-href]
[![Standard JS][standard-js-src]][standard-js-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]

> Guess.js module for Nuxt.js

[📖 **Release Notes**](./CHANGELOG.md)

TODO:

* Vue.js support in guess-parser [Tracked Issue](https://github.com/guess-js/guess/issues/43)

## Setup

- Add `@nuxtjs/guess` dependency using yarn or npm to your project
- Add `@nuxtjs/guess` to `modules` section of `nuxt.config.js`
- Config 'options' as `options` of [guess-webpack][guess-webpack-href]
- Note: the default `reportProvider` when there is no `GA` and `reportProvider` specifed is the content of `router.json` under [`rootDir`][nuxt-rootDir-href] or [`srcDir`][nuxt-srcDir-href]

```js
{
  modules: [
    // Simple usage
    '@nuxtjs/guess',

    // With options
    ['@nuxtjs/guess', {
      GA: 'XXXXXX'
    }],
 ]
}
```

## Development

- Clone this repository
- Install dependencies using `yarn install` or `npm install`
- Start development server using `npm run dev`

## Credits

This module is inspired by [guest-nuxt][guess-nuxt-href] by @daliborgogic.

## License

[MIT License](./LICENSE)

Copyright (c) Clark Du <clark.duxin@gmail.com>

<!-- Badges -->
[david-dm-src]: https://david-dm.org/nuxt-community/guess-module/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/nuxt-community/guess-module
[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com
[circle-ci-src]: https://img.shields.io/circleci/project/github/nuxt-community/guess-module.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/nuxt-community/guess-module
[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-community/guess-module.svg?style=flat-square
[codecov-href]: https://codecov.io/github/nuxt-community/guess-module
[npm-version-src]: https://img.shields.io/npm/dt/@nuxtjs/guess.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@nuxtjs/guess
[npm-downloads-src]: https://img.shields.io/npm/v/@nuxtjs/guess/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/guess
[guess-nuxt-href]: https://github.com/daliborgogic/guess-nuxt
[guess-webpack-href]: https://github.com/guess-js/guess/tree/master/packages/guess-webpack/#basic-usage
[nuxt-rootDir-href]: https://nuxtjs.org/api/configuration-rootdir
[nuxt-srcDir-href]: https://nuxtjs.org/api/configuration-srcdir
