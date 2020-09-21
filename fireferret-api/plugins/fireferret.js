'use strict'

const fastifyPlugin = require('fastify-plugin')
const FireFerret = require('../../../fireferret')

async function fireFerret (fastify, options) {
  try {
    const ffopts = {
      wideMatch: true,
      redis: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        auth_pass: process.env.REDIS_AUTH_PASS
      },
      mongo: {
        uri: process.env.MONGO_URI,
        dbName: process.env.MONGO_DB,
        collectionName: process.env.MONGO_COLLECTION
      }
    }
    const fireFerret = new FireFerret(ffopts)
    await fireFerret.connect()

    fastify.decorate('fireFerret', fireFerret)
  } catch (err) {
    console.error(err)
  }
}

module.exports = fastifyPlugin(fireFerret)
