const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')

router
  .get('/', ProductController.getProduct)
  .post('/', ProductController.insertProduct)
  .patch('/:productId', ProductController.updateProduct)
  .delete('/:productId', ProductController.deleteProduct)

module.exports = router
