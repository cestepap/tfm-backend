"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var authCtrl = _interopRequireWildcard(require("../controllers/auth.controllers"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.post('/signup', _middlewares.verifySignup.checkDuplicateUsernameOrEmail, authCtrl.signup);
router.post('/signin', authCtrl.signin);
var _default = router;
exports["default"] = _default;