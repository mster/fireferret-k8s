'use strict'

const querySchema = {
  response: {
    200: {
      type: 'array'
    },
    404: {
      type: 'object',
      properties: {
        message: { type: 'string' }
      }
    }
  },
  queryString: {}
}

module.exports = { querySchema }
