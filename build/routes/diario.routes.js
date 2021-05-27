"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var diarioCtrl = _interopRequireWildcard(require("../controllers/diario.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/', diarioCtrl.getDiario);
router.get('/:diarioId', diarioCtrl.getDiarioById);
router.get('/user/:userId', diarioCtrl.getDiarioByUserId);
router.post('/', [// [authJwt.verifyToken, authJwt.isAdmin],
  // verifySignup.checkDuplicateUsernameOrEmail,
], diarioCtrl.createDiario);
router["delete"]('/:diarioId', // [authJwt.verifyToken, authJwt.isAdmin],
diarioCtrl.deleteDiarioById);
router.put('/:diarioId', // [authJwt.verifyToken, authJwt.isAdmin],
diarioCtrl.updateDiarioById);
var _default = router;
exports["default"] = _default;