"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signin = exports.signup = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = _interopRequireDefault(require("../models/User"));

var _jsonwebtoken = _interopRequireWildcard(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

var _Role = _interopRequireDefault(require("../models/Role"));

var signup = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, username, email, password, rol, newUser, savedUser, token;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, username = _req$body.username, email = _req$body.email, password = _req$body.password, rol = _req$body.rol; // const userFound = User.find({email})

            _context.t0 = _User["default"];
            _context.t1 = username;
            _context.t2 = email;
            _context.next = 6;
            return _User["default"].encryptPassword(password);

          case 6:
            _context.t3 = _context.sent;
            _context.t4 = rol;
            _context.t5 = {
              username: _context.t1,
              email: _context.t2,
              password: _context.t3,
              rol: _context.t4
            };
            newUser = new _context.t0(_context.t5);
            _context.next = 12;
            return newUser.save();

          case 12:
            savedUser = _context.sent;
            console.log(savedUser); // permite crear un token. se le pasa el dato para generar el token, por lo general el id
            // y una palabra secreta que traemos del config.
            // el expiresIn es cuando cadua --> 1 dia

            token = _jsonwebtoken["default"].sign({
              id: savedUser._id
            }, _config["default"].SECRET, {
              expiresIn: 86400
            }); // res.status(200).json({ token });

            if (savedUser) {
              _context.next = 19;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              message: 'Error durante el proceso'
            }));

          case 19:
            res.status(200).json({
              token: token,
              savedUser: savedUser
            });

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function signup(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.signup = signup;

var signin = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var userFound, matchPassword, token;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _User["default"].findOne({
              email: req.body.email
            });

          case 2:
            userFound = _context2.sent;

            if (userFound) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              message: 'Usuario no encontrado'
            }));

          case 5:
            _context2.next = 7;
            return _User["default"].comparePassword(req.body.password, userFound.password);

          case 7:
            matchPassword = _context2.sent;

            if (matchPassword) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              token: null,
              message: 'Password incorrecto',
              user: userFound,
              reqbody: req.body.password,
              userfound: userFound.password
            }));

          case 10:
            token = _jsonwebtoken["default"].sign({
              id: userFound._id
            }, _config["default"].SECRET, {
              expiresIn: 86400
            });
            userFound.password = null;
            res.json({
              token: token,
              userFound: userFound
            }); // res.json({ token, user: userFound });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function signin(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.signin = signin;