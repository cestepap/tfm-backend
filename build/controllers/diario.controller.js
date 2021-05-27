"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateDiarioById = exports.deleteDiarioById = exports.createDiario = exports.getDiarioByUserId = exports.getDiarioById = exports.getDiario = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Diario = _interopRequireDefault(require("../models/Diario"));

var getDiario = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var diarios;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Diario["default"].find();

          case 2:
            diarios = _context.sent;
            res.json(diarios);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getDiario(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getDiario = getDiario;

var getDiarioById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var diarioId, diario;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            diarioId = req.params.diarioId;
            _context2.next = 3;
            return _Diario["default"].findById(diarioId);

          case 3:
            diario = _context2.sent;
            res.json(diario);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getDiarioById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getDiarioById = getDiarioById;

var getDiarioByUserId = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var userId, diario;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            userId = req.params.userId;
            _context3.next = 3;
            return _Diario["default"].find({
              idCliente: userId
            });

          case 3:
            diario = _context3.sent;
            res.json(diario);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getDiarioByUserId(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getDiarioByUserId = getDiarioByUserId;

var createDiario = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body, idCliente, descripcion, notasDiario, newDiario, diarioSaved;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, idCliente = _req$body.idCliente, descripcion = _req$body.descripcion, notasDiario = _req$body.notasDiario;
            newDiario = new _Diario["default"]({
              idCliente: idCliente,
              descripcion: descripcion,
              notasDiario: notasDiario
            });
            _context4.next = 4;
            return newDiario.save();

          case 4:
            diarioSaved = _context4.sent;
            //codigos de estado. estado 201 nuevo recurso se ha creado
            res.status(201).json(diarioSaved);

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function createDiario(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.createDiario = createDiario;

var deleteDiarioById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var diarioId, deletedDiario;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            diarioId = req.params.diarioId;
            _context5.next = 3;
            return _Diario["default"].findByIdAndDelete(diarioId);

          case 3:
            deletedDiario = _context5.sent;
            console.log(deletedDiario);
            res.status(204).json(deletedDiario);

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteDiarioById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteDiarioById = deleteDiarioById;

var updateDiarioById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var updatedDiario;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _Diario["default"].findByIdAndUpdate(req.params.diarioId, req.body, {
              "new": true
            });

          case 2:
            updatedDiario = _context6.sent;
            console.log(req.body);
            res.status(200).json(updatedDiario);

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function updateDiarioById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.updateDiarioById = updateDiarioById;