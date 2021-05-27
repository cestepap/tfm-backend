"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var ejercicioCtrl = _interopRequireWildcard(require("../controllers/ejercicios.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/', ejercicioCtrl.getEjercicios);
router.get('/:ejercicioId', ejercicioCtrl.getEjercicioById);
router.get('/grupo-muscular/:grupoMuscular', ejercicioCtrl.getEjercicioByGrupoMuscular);
router.post('/', [// [authJwt.verifyToken, authJwt.isAdmin],
  // verifySignup.checkDuplicateUsernameOrEmail,
], ejercicioCtrl.createEjercicio);
router["delete"]('/:ejercicioId', // [authJwt.verifyToken, authJwt.isAdmin],
ejercicioCtrl.deleteEjercicioById);
router.put('/:ejercicioId', // [authJwt.verifyToken, authJwt.isAdmin],
ejercicioCtrl.updateEjercicioById);
var _default = router;
exports["default"] = _default;