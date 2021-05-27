"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var comidasCtrl = _interopRequireWildcard(require("../controllers/comida.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/', comidasCtrl.getComidas);
router.get('/:comidaId', comidasCtrl.getComidaById);
router.get('/diaSemanaDieta/:diaSemanaDietaId', comidasCtrl.getComidasByDiaSemanaDietaId);
router.post('/', [// [authJwt.verifyToken, authJwt.isAdmin],
  // verifySignup.checkDuplicateUsernameOrEmail,
], comidasCtrl.createComida);
router["delete"]('/:comidaId', // [authJwt.verifyToken, authJwt.isAdmin],
comidasCtrl.deleteComidaById);
router.put('/:comidaId', // [authJwt.verifyToken, authJwt.isAdmin],
comidasCtrl.updateComidaById);
var _default = router;
exports["default"] = _default;