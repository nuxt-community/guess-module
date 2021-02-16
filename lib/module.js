const { resolve } = require('path')
const { GuessPlugin } = require('guess-webpack')

function guessModule (moduleOptions) {
  this.extendBuild((config, { isClient }) => {
    if (isClient) {
      const guessOptions = Object.assign({
        // Hints Guess to not perform pre-fetching and delegate this logic to its consumer.
        runtime: {
          delegate: true,
          prefetchConfig: {
            '4g': 0.3,
            '3g': 0.3,
            '2g': 0.3,
            'slow-2g': 0.3
          }
        },
        // Guess does not have to collect the routes and the corresponding bundle entry points.
        routeProvider: false
      }, moduleOptions)

      if (!guessOptions.reportProvider && !guessOptions.GA) {
        const { GA } = process.env
        if (GA) {
          guessOptions.GA = GA
        } else {
          const { rootDir, srcDir } = this.options
          guessOptions.reportProvider = defaultReportProvider({ rootDir, srcDir })
        }
      }

      config.plugins.push(
        new GuessPlugin(guessOptions)
      )
    }
  })

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'guess.js',
    ssr: false
  })
}

function defaultReportProvider ({ rootDir, srcDir }) {
  const { readFileSync, existsSync } = require('fs')
  for (const dir of [srcDir, rootDir]) {
    const routesPath = resolve(dir, 'routes.json')
    if (existsSync(routesPath)) {
      return () => Promise.resolve(JSON.parse(readFileSync(routesPath)))
    }
  }
}

module.exports = guessModule
module.exports.meta = require('../package.json')
