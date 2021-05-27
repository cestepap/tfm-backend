"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var diasSemanaRutinaCtrl = _interopRequireWildcard(require("../controllers/diaSemanaRutina.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/', diasSemanaRutinaCtrl.getDiasSemanaRutina);
router.get('/:diaSemanaRutinaId', diasSemanaRutinaCtrl.getDiaSemanaRutinaById);
router.get('/rutina/:rutinaId', diasSemanaRutinaCtrl.getDiasSemanaRutinaByRutinaId);
router.post('/', [// [authJwt.verifyToken, authJwt.isAdmin],
  // verifySignup.checkDuplicateUsernameOrEmail,
], diasSemanaRutinaCtrl.createDiaSemanaRutina);
router["delete"]('/:diaSemanaRutinaId', // [authJwt.verifyToken, authJwt.isAdmin],
diasSemanaRutinaCtrl.deleteDiaSemanaRutinaById);
router.put('/update/:diaSemanaRutinaId', // [authJwt.verifyToken, authJwt.isAdmin],
diasSemanaRutinaCtrl.updateDiaSemanaRutinaById);
var _default = router;
exports["default"] = _default;