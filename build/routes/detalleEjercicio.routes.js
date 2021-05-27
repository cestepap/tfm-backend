"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var detalleEjercicioCtrl = _interopRequireWildcard(require("../controllers/detalleEjercicio.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/', detalleEjercicioCtrl.getDetallesEjercicios);
router.get('/:detalleEjercicioId', detalleEjercicioCtrl.getDetalleEjercicioById);
router.get('/rutina/:diaSemanaRutinaId', detalleEjercicioCtrl.getDetallesEjerciciosByDiaSemanaRutinaId);
router.post('/', [// [authJwt.verifyToken, authJwt.isAdmin],
  // verifySignup.checkDuplicateUsernameOrEmail,
], detalleEjercicioCtrl.createDetalleEjercicio);
router["delete"]('/:detalleEjercicioId', // [authJwt.verifyToken, authJwt.isAdmin],
detalleEjercicioCtrl.deleteDetalleEjercicioById);
router.put('/:detalleEjercicioId', // [authJwt.verifyToken, authJwt.isAdmin],
detalleEjercicioCtrl.updateDetalleEjercicioById);
var _default = router;
exports["default"] = _default;