const express = require('express')
const router = express.Router()

const ProductController = require('../controllers/ProductController')
router.get('/create', ProductController.createProduct)
router.post('/create', ProductController.createProductPost)
router.get('/remove/:id', ProductController.removeProduct)
router.get('/edit/:id', ProductController.editProductPage)
router.post('/edit', ProductController.editProduct)
router.get('/:id', ProductController.getProduct)
router.get('/', ProductController.getProducts)
module.exports = router