"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUserById = exports.deleteUserById = exports.createUser = exports.getUsersByRole = exports.getUsers = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = _interopRequireDefault(require("../models/User"));

var getUsers = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var users;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _User["default"].find();

          case 2:
            users = _context.sent;
            res.json(users);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getUsers(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getUsers = getUsers;

var getUsersByRole = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var rol, users;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            rol = req.params.rol;
            _context2.next = 3;
            return _User["default"].find({
              "rol": rol
            });

          case 3:
            users = _context2.sent;
            res.json(users);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getUsersByRole(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getUsersByRole = getUsersByRole;

var createUser = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, username, email, password, role, imagen, newUser, userSaved;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // res.json('creating user');
            _req$body = req.body, username = _req$body.username, email = _req$body.email, password = _req$body.password, role = _req$body.role, imagen = _req$body.imagen;
            newUser = new _User["default"]({
              username: username,
              email: email,
              password: password,
              role: role,
              imagen: imagen
            });
            _context3.next = 4;
            return newUser.save();

          case 4:
            userSaved = _context3.sent;
            //codigos de estado. estado 201 nuevo recurso se ha creado
            res.status(201).json(userSaved);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function createUser(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.createUser = createUser;

var deleteUserById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var userId, deletedUser;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            userId = req.params.userId;
            _context4.next = 3;
            return _User["default"].findByIdAndDelete(userId);

          case 3:
            deletedUser = _context4.sent;
            console.log(deletedUser);
            res.status(204).json(deletedUser);

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteUserById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteUserById = deleteUserById;

var updateUserById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var updatedUser;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _User["default"].findByIdAndUpdate(req.params.userId, req.body, {
              "new": true
            });

          case 2:
            updatedUser = _context5.sent;
            console.log(req.body);
            res.status(200).json(updatedUser);

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function updateUserById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateUserById = updateUserById;