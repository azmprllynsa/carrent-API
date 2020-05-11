const redis = require('redis')
const client = redis.createClient(process.env.PORT_REDIS)
const helpers = require('./response')

module.exports = {
  cacheGetAllBooks: (req, res, next) => {
    const response = {}
    client.get('getallbooks', (err, data) => {
      console.log(data)
      if (err) {
        response.status = 404
        response.message = 'Product not Found!'
        helpers.helpers(res, response)
      }
      if (data.length !== null) {
        response.status = 200
        response.message = 'OK!'
        // response.data = data
        helpers.helpers(res, response)
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
