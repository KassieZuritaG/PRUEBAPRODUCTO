const express = require('express');
const mainController = require('../controllers/mainController');

const router = express.Router();

router.get('/productos', mainController.getProducts);
router.get('/productos/:id', mainController.getProductById);
router.post('/productos', mainController.createProduct);
router.put('/productos/:id', mainController.updateProduct);
router.delete('/productos/:id', mainController.deleteProduct);

module.exports = router;