const express = require('express');
const router = express.Router();
var productItemsController = require('../controllers/productItemsController')

//middleware
router.use(function (req, res, next) {
    console.log(`Middleware router: ${req.originalUrl} `);
    next();
})

class ProductRouters {
    constructor() { }

    homePage() {
        router.get('/products', (req, res) => {
           productItemsController.homePage(req, res)
        });
    }

    getAllProject() {
        router.get('/products/getAllProducts', (req, res) => {
            productItemsController.getAllProducts(req, res);
        })
    }

    addProduct() {
        router.post('/products/addproduct', (req, res) => {
            productItemsController.addProduct(req, res);
        })
    }
}

module.exports = new ProductRouters();
module.exports = router;

obj = new ProductRouters();
obj.getAllProject()
obj.addProduct();
obj.homePage();

