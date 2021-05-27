"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var dietaCtrl = _interopRequireWildcard(require("../controllers/dietas.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/', dietaCtrl.getDietas);
router.get('/:dietaId', dietaCtrl.getDieta);
router.get('/ep/:_idEP', dietaCtrl.getDietasByIdEP);
router.get('/user/:_idCliente', dietaCtrl.getDietasByIdCliente);
router.post('/', [// [authJwt.verifyToken, authJwt.isAdmin],
  // verifySignup.checkDuplicateUsernameOrEmail,
], dietaCtrl.createDieta);
router["delete"]('/:dietaId', // [authJwt.verifyToken, authJwt.isAdmin],
dietaCtrl.deleteDietaById);
router.put('/update/:dietaId', // [authJwt.verifyToken, authJwt.isAdmin],
dietaCtrl.updateDietaById);
var _default = router;
exports["default"] = _default;