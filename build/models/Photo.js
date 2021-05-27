"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var schema = new _mongoose.Schema({
  title: String,
  description: String,
  imagePath: String
}); // interface IPhoto extends Document {
//     title: string;
//     description: string;
//     imagePath: string;
// }

var _default = (0, _mongoose.model)('Photo', schema);

exports["default"] = _default;