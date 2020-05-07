const product = require('../models').product
const helpers = require('../helpers/response')

module.exports = {
  insertProduct: async (req, res) => {
    const response = {}
    try {
      const body = req.body
      const data = await product.create(body)
      if (data === undefined) {
        response.status = 404
        response.message = 'Data Not Found'
        helpers.helpers(res, response)
      } else {
        response.status = 200
        response.message = 'OK'
        response.data = data
        helpers.helpers(res, response)
      }
    } catch (err) {
      const response = {}
      response.status = 500
      response.message = 'Internal Server Error'
      response.err = err

      helpers.helpers(res, response)
    }
  },
  getProduct: async (req, res) => {
    let response = {}
    try {
      const data = await product.findAll({})
      if (data.length === 0) {
        response.status = 404
        response.message = 'Product not Found!'
        helpers.helpers(res, response)
      } else {
        response.status = 200
        response.message = 'OK!'
        response.data = data
        helpers.helpers(res, response)
      }
    } catch (err) {
      response = {}
      response.status = 500
      response.message = 'Internal Server Error'
      response.err = err
      helpers.helpers(res, response)
    }
  },
  updateProduct: async (req, res) => {
    let response = {}
    try {
      const productId = req.params.productId
      const body = req.body
      const [edit] = await product.update(body, {
        where: {
          id: productId
        }
      })
      const data = await product.findOne({
        where: {
          id: productId
        }
      })
      if (edit === 1) {
        response.status = 201
        response.message = 'Product Successfully Edited'
        response.data = data
        helpers.helpers(res, response)
      } if (edit === 0) {
        response.status = 404
        response.message = 'Product Not Found'
        helpers.helpers(res, response)
      }
    } catch (err) {
      response = {}
      response.status = 500
      response.message = 'Internal Server Error'
      helpers.helpers(res, response)
    }
  },
  deleteProduct: async (req, res) => {
    let response = {}
    try {
      const productId = req.params.productId
      const data = await product.destroy({
        where: {
          id: productId
        }
      })
      if (data) {
        response.status = 200
        response.message = 'Successfully Deleted'
        helpers.helpers(res, response)
      } else {
        response.status = 404
        response.message = 'Product Not Found'
        helpers.helpers(res, response)
      }
    } catch (err) {
      response = {}
      response.status = 500
      response.message = 'Internal Server Error'
      response.err = err
      helpers.helpers(res, response)
    }
  }
}
