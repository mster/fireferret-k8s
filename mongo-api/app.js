'use strict'

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = require('./build')({ logger: true })
const PORT = process.env.PORT || 3371

const start = async () => {
  try {
    await app.listen(PORT)
    app.log.info(`App listening on port: ${app.server.address().port}`)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
