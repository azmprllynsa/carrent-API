/* eslint-disable no-undef */
const redis = require('redis')
const client = redis.createClient(process.env.PORT_REDIS)
const helpers = require('./response')

module.exports = {
  cacheGetAllBooks: (req, res, next) => {
    let pagination = {}
    client.get('getallbooks', (err, data) => {
      console.log(data)

      const page = parseInt(req.query.page, 10) || 1
      const limit = parseInt(req.query.limit, 10) || 5
      const offset = (page * limit) - limit
      pagination = {
        current_page: page,
        offset,
        limit
        // total_data: count
        // per_page: data.length,
        // path
      }
      if (err) {
        pagination.status = 404
        pagination.message = 'Product not Found!'
        helpers.pagination(res, req.query, pagination)
      }
      if (data !== null) {
        pagination.status = 200
        pagination.message = 'OK!'
        pagination.data = data
        helpers.pagination(res, req.query, pagination)
      } else {
        next()
      }
    })
  },
  clearGetAllBooks: (req, res, next) => {
    client.del('getallbooks')
    next()
  }
}
