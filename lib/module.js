const { GuessPlugin } = require('guess-webpack')
const { resolve } = require('path')

function guessModule (moduleOptions) {
  this.extendBuild((config, { isClient, isServer }) => {
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

      if (!guessOptions.reportProvider) {
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
  let reportProvider
  [srcDir, rootDir].some((dir) => {
    const routesPath = resolve(dir, 'routes.json')
    if (existsSync(routesPath)) {
      reportProvider = () => Promise.resolve(JSON.parse(readFileSync(routesPath)))
      return true
    }
  })
  return reportProvider
}

module.exports = guessModule
module.exports.meta = require('../package.json')
