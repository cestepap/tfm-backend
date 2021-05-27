"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var userCtrl = _interopRequireWildcard(require("../controllers/users.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/', userCtrl.getUsers);
router.get('/rol/:rol', userCtrl.getUsersByRole);
router.post('/', [// [authJwt.verifyToken, authJwt.isAdmin],
  // verifySignup.checkDuplicateUsernameOrEmail,
], userCtrl.createUser);
router["delete"]('/:userId', // [authJwt.verifyToken, authJwt.isAdmin],
userCtrl.deleteUserById);
router.put('/:userId', // [authJwt.verifyToken, authJwt.isAdmin],
userCtrl.updateUserById);
var _default = router;
exports["default"] = _default;