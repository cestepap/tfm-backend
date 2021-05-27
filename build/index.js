"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

var _database = _interopRequireDefault(require("./database"));

_app["default"].listen(4000);

console.log('server listen on port', 4000);