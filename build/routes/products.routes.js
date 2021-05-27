"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var productsCtrl = _interopRequireWildcard(require("../controllers/products.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isModerator], productsCtrl.createProduct);
router.get('/', productsCtrl.getProducts);
router.get('/:productId', productsCtrl.getProductById);
router.put('/:productId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], productsCtrl.updateProductById);
router["delete"]('/:productId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], productsCtrl.deleteProductById);
var _default = router;
exports["default"] = _default;