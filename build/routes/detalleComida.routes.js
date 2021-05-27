"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var detalleComidaCtrl = _interopRequireWildcard(require("../controllers/detalleComida.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/', detalleComidaCtrl.getDetallesComida);
router.get('/:detalleComidaId', detalleComidaCtrl.getDetalleComidaById);
router.get('/comida/:comidaId', detalleComidaCtrl.getDetallesComidaByComidaId);
router.post('/', [// [authJwt.verifyToken, authJwt.isAdmin],
  // verifySignup.checkDuplicateUsernameOrEmail,
], detalleComidaCtrl.createDetallesComida);
router["delete"]('/:detalleComidaId', // [authJwt.verifyToken, authJwt.isAdmin],
detalleComidaCtrl.deleteDetalleComidaById);
router.put('/:detalleComidaId', // [authJwt.verifyToken, authJwt.isAdmin],
detalleComidaCtrl.updateDetalleComidaById);
var _default = router;
exports["default"] = _default;