
const ProductsItemModel = require('../models/productItemsModel')
//const router = require('../routes/router');
const { response } = require('express');
//const { get } = require('../routes/things');

var produsts = [];
var cart = [];

produsts.push(
    // { id: 001, productName: 'Mobile Device', description: 'Telecommunication product', price: 15999, },
    // { id: 002, productName: 'Laptop', description: 'Electronic assets ', price: 45999, },
    // { id: 003, productName: "Mobile Device", description: "Telecommunication product", price: 15999 }
    {
        "id": "1",
        "name": "product 1",
        "description": "The passage experienced a surge in popularity during the 1960s when Letraset used it",
        "imageUrl": "https://cf.ltkcdn.net/womens-fashion/images/orig/205134-1575x1218-onlineclothesshopping.jpg",
        "price": 1250
    },
    {
        "id": "2",
        "name": "product-2",
        "description": "The passage experienced a surge in popularity during the 1960s when Letraset used it",
        "imageUrl": "https://cdn.fcglcdn.com/brainbees/images/cattemplate/Tactical-Units_Kids_Shop-by-age_2.jpg",
        "price": 1199
    },
    {
        "id": "3",
        "name": "product-3",
        "description": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.",
        "imageUrl": "https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/608x608/products/10555/101798/Men-sneakers-2018-new-denim-lace-up-canvas-shoes-men-footwear-spring-summer-plimsolls-breathable-sneakers__47835.1536301316.jpg?c=2",
        "price": 649
    },
    {
        "id": "4",
        "name": "product-4",
        "description": "Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
        "imageUrl": "https://cf.ltkcdn.net/womens-fashion/images/orig/205134-1575x1218-onlineclothesshopping.jpg",
        "price": 1899
    },
    {
        "id": "5",
        "name": "product-2",
        "description": "The passage experienced a surge in popularity during the 1960s when Letraset used it",
        "imageUrl": "https://cdn.fcglcdn.com/brainbees/images/cattemplate/Tactical-Units_Kids_Shop-by-age_2.jpg",
        "price": 1199
    },
    {
        "id": "6",
        "name": "product-2",
        "description": "The passage experienced a surge in popularity during the 1960s when Letraset used it",
        "imageUrl": "https://cdn.fcglcdn.com/brainbees/images/cattemplate/Tactical-Units_Kids_Shop-by-age_2.jpg",
        "price": 1199
    })

cart.push(
    {
        "product": {
            "id": "2",
            "name": "product-2",
            "description": "The passage experienced a surge in popularity during the 1960s when Letraset used it",
            "imageUrl": "https://cdn.fcglcdn.com/brainbees/images/cattemplate/Tactical-Units_Kids_Shop-by-age_2.jpg",
            "price": 1199
        },
        "id": 1
    },
    {
        "product": {
            "id": "2",
            "name": "product-2",
            "description": "The passage experienced a surge in popularity during the 1960s when Letraset used it",
            "imageUrl": "https://cdn.fcglcdn.com/brainbees/images/cattemplate/Tactical-Units_Kids_Shop-by-age_2.jpg",
            "price": 1199
        },
        "id": 2
    },
    {
        "product": {
            "id": "3",
            "name": "product-3",
            "description": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.",
            "imageUrl": "https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/608x608/products/10555/101798/Men-sneakers-2018-new-denim-lace-up-canvas-shoes-men-footwear-spring-summer-plimsolls-breathable-sneakers__47835.1536301316.jpg?c=2",
            "price": 649
        },
        "id": 3
    },
    {
        "product": {
            "id": "3",
            "name": "product-3",
            "description": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.",
            "imageUrl": "https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/608x608/products/10555/101798/Men-sneakers-2018-new-denim-lace-up-canvas-shoes-men-footwear-spring-summer-plimsolls-breathable-sneakers__47835.1536301316.jpg?c=2",
            "price": 649
        },
        "id": 4
    },
    {
        "product": {
            "id": "1",
            "name": "product 1",
            "description": "The passage experienced a surge in popularity during the 1960s when Letraset used it",
            "imageUrl": "https://cf.ltkcdn.net/womens-fashion/images/orig/205134-1575x1218-onlineclothesshopping.jpg",
            "price": 1250
        },
        "id": 5
    },
    {
        "product": {
            "id": "1",
            "name": "product 1",
            "description": "The passage experienced a surge in popularity during the 1960s when Letraset used it",
            "imageUrl": "https://cf.ltkcdn.net/womens-fashion/images/orig/205134-1575x1218-onlineclothesshopping.jpg",
            "price": 1250
        },
        "id": 6
    },
    {
        "product": {
            "id": "4",
            "name": "product-4",
            "description": "Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
            "imageUrl": "https://cf.ltkcdn.net/womens-fashion/images/orig/205134-1575x1218-onlineclothesshopping.jpg",
            "price": 1899
        },
        "id": 7
    },
    {
        "product": {
            "id": "3",
            "name": "product-3",
            "description": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.",
            "imageUrl": "https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/608x608/products/10555/101798/Men-sneakers-2018-new-denim-lace-up-canvas-shoes-men-footwear-spring-summer-plimsolls-breathable-sneakers__47835.1536301316.jpg?c=2",
            "price": 649
        },
        "id": 8
    })

class ProductItemsController {
    constructor(router) {
        // router.get('/', this.homePage().bind(this));
        //router.get('/cart', this.getAllProducts().bind(this))
        //router.get('/products/getAllProducts', this.getAllProducts.bind(this));
    }

    homePage(req, res) {
        res.send({
            success: true,
            message: 'welcome to produts hom page..!'
        });
    }

    getAllProducts(req, res) {
        console.log('In Controller..!');
        res.send(produsts)
    }

    addProduct(req, res) {
        if (req.params) {
            console.log('request reach to endpoint..!', req.params.id)
            produsts.push({ id: req.params.id, name: req.params.name, description: req.params.description, price: req.params.price });
            res.send({ success: true, status: 200, message: 'product  addedd successfully..!', })
        } else {
            res.send({ success: false, message: 'product not addedd :(', status: 404 })
        }
    }
}

module.exports = new ProductItemsController();