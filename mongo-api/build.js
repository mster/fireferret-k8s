'use strict'

'use strict'

const path = require('path')
const fastify = require('fastify')
const autoload = require('fastify-autoload')
const helmet = require('fastify-helmet')

function build (opts = {}) {
  const app = fastify(opts)

  /* autoload custom plugins */
  app.register(autoload, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  /* autoload custom services */
  app.register(autoload, {
    dir: path.join(__dirname, 'services'),
    options: Object.assign({ prefix: '/api' }, opts)
  })

  /* register community plugins */
  app.register(helmet)

  return app
}

module.exports = build
