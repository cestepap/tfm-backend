"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var alimentoCtrl = _interopRequireWildcard(require("../controllers/alimentos.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/', alimentoCtrl.getAlimentos);
router.get('/:alimentoId', alimentoCtrl.getAlimentoById);
router.get('/grupo-alimento/:grupoAlimento', alimentoCtrl.getAlimentoByGrupoAlimento);
router.post('/', [// [authJwt.verifyToken, authJwt.isAdmin],
  // verifySignup.checkDuplicateUsernameOrEmail,
], alimentoCtrl.createAlimento);
router["delete"]('/:alimentoId', // [authJwt.verifyToken, authJwt.isAdmin],
alimentoCtrl.deleteAlimentoById);
router.put('/:alimentoId', // [authJwt.verifyToken, authJwt.isAdmin],
alimentoCtrl.updateAlimentoById);
var _default = router;
exports["default"] = _default;