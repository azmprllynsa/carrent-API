const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/product')

router
  .get('/', ProductController.getProduct)
  .post('/', ProductController.insertProduct)
  .patch('/:userId', ProductController.updateProduct)
  .delete('/:userId', ProductController.deleteProduct)

module.exports = router
