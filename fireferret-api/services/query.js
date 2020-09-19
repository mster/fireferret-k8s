'use strict'

const { querySchema } = require('../schemas/query')
const httpError = require('http-errors')

module.exports = async function (fastify, opts) {
  fastify.addHook('onRequest', async (req, reply) => {})

  fastify.setNotFoundHandler(function (req, reply) {
    reply
      .code(404)
      .type('application/json')
      .send({ message: 'Requested resource does not exist.' })
  })

  fastify.get('/query', { schema: querySchema }, async function (req) {
    let { query, stream, page, size } = req.query

    if (!query) {
      throw httpError(404, "QueryString parameter 'query' is required")
    }

    if ((page || size) && (isNaN(page) || isNaN(size))) {
      throw httpError(
        400,
        'Invalid pagination options. Page and size must be coercible non-negative integers.'
      )
    }

    query = JSON.parse(query)
    const queryOpts = {}

    if (stream === 'true') queryOpts.stream = true
    if (!isNaN(page) && !isNaN(size)) queryOpts.pagination = { page, size }

    return this.fireFerret.fetch(query, queryOpts)
  })
}
