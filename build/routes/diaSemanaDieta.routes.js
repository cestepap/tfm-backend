"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var diasSemanaDietaCtrl = _interopRequireWildcard(require("../controllers/diaSemanaDieta.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/', diasSemanaDietaCtrl.getDiasSemanaDieta);
router.get('/:diaSemanaDietaId', diasSemanaDietaCtrl.getDiaSemanaDietaById);
router.get('/dieta/:dietaId', diasSemanaDietaCtrl.getDiasSemanaDietaByDietaId);
router.post('/', [// [authJwt.verifyToken, authJwt.isAdmin],
  // verifySignup.checkDuplicateUsernameOrEmail,
], diasSemanaDietaCtrl.createDiaSemanaDieta);
router["delete"]('/:diaSemanaDietaId', // [authJwt.verifyToken, authJwt.isAdmin],
diasSemanaDietaCtrl.deleteDiaSemanaDietaById);
router.put('/update/:diaSemanaDietaId', // [authJwt.verifyToken, authJwt.isAdmin],
diasSemanaDietaCtrl.updateDiaSemanaDietaById);
var _default = router;
exports["default"] = _default;