"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var rutinaCtrl = _interopRequireWildcard(require("../controllers/rutinas.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/', rutinaCtrl.getRutinas);
router.get('/:rutinaId', rutinaCtrl.getRutina);
router.get('/ep/:_idEP', rutinaCtrl.getRutinasByIdEP);
router.get('/user/:_idCliente', rutinaCtrl.getRutinasByIdCliente);
router.post('/', [// [authJwt.verifyToken, authJwt.isAdmin],
  // verifySignup.checkDuplicateUsernameOrEmail,
], rutinaCtrl.createRutina);
router["delete"]('/:rutinaId', // [authJwt.verifyToken, authJwt.isAdmin],
rutinaCtrl.deleteRutinaById);
router.put('/update/:rutinaId', // [authJwt.verifyToken, authJwt.isAdmin],
rutinaCtrl.updateRutinaById);
var _default = router;
exports["default"] = _default;