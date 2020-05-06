const express = require('express')
const router = express.Router()
const model = require('../models/index')

router.get('/', async function (req, res, next) {
  try {
    const product = await model.product.findAll({})
    if (product.length !== 0) {
      res.json({
        status: 'OK',
        messages: '',
        data: product
      })
    } else {
      res.json({
        status: 'ERROR',
        messages: 'EMPTY',
        data: {}
      })
    }
  } catch (err) {
    res.json({
      status: 'ERROR',
      messages: err.messages,
      data: {}
    })
  }
})

// GET product listing.
router.get('/', function (req, res, next) {
})
// POST product
router.post('/', function (req, res, next) {
})
// UPDATE product
router.patch('/:id', function (req, res, next) {
})
// DELETE product
router.delete('/:id', function (req, res, next) {
})
module.exports = router
