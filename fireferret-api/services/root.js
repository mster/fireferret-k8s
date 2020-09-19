'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async () => {
    return { message: 'Welcome home, Data.' }
  })
}
