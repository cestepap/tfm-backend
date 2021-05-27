"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _multer = _interopRequireDefault(require("../libs/multer"));

var photoCtrl = _interopRequireWildcard(require("../controllers/photo.controller"));

var router = (0, _express.Router)();
router.get('/', photoCtrl.getPhotos);
router.post('/', _multer["default"].single('image'), photoCtrl.createPhoto);
router.get('/:id', photoCtrl.getPhoto);
router["delete"]('/:id', photoCtrl.deletePhoto);
router.put('/:id', photoCtrl.updatePhoto);
var _default = router;
exports["default"] = _default;