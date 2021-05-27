"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var notaDiarioCtrl = _interopRequireWildcard(require("../controllers/notaDiario.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/', notaDiarioCtrl.getDiario);
router.get('/:notaDiarioId', notaDiarioCtrl.getNotaDiarioById);
router.get('/diario/:diarioId', notaDiarioCtrl.getNotasDiarioByDiarioId);
router.post('/', [// [authJwt.verifyToken, authJwt.isAdmin],
  // verifySignup.checkDuplicateUsernameOrEmail,
], notaDiarioCtrl.createNotaDiario);
router["delete"]('/:notaDiarioId', // [authJwt.verifyToken, authJwt.isAdmin],
notaDiarioCtrl.deleteNotaDiarioById);
router.put('/:notaDiarioId', // [authJwt.verifyToken, authJwt.isAdmin],
notaDiarioCtrl.updateNotaDiarioById);
var _default = router;
exports["default"] = _default;