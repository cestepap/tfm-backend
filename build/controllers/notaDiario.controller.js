"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateNotaDiarioById = exports.deleteNotaDiarioById = exports.createNotaDiario = exports.getNotasDiarioByDiarioId = exports.getNotaDiarioById = exports.getDiario = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _NotaDiario = _interopRequireDefault(require("../models/NotaDiario"));

var getDiario = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var notasDiario;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _NotaDiario["default"].find();

          case 2:
            notasDiario = _context.sent;
            res.json(notasDiario);

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

var getNotaDiarioById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var notaDiarioId, notaDiario;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            notaDiarioId = req.params.notaDiarioId;
            _context2.next = 3;
            return _NotaDiario["default"].findById(notaDiarioId);

          case 3:
            notaDiario = _context2.sent;
            res.json(notaDiario);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getNotaDiarioById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getNotaDiarioById = getNotaDiarioById;

var getNotasDiarioByDiarioId = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var diarioId, notasDiario;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            diarioId = req.params.diarioId;
            _context3.next = 3;
            return _NotaDiario["default"].find({
              "idDiario": diarioId
            });

          case 3:
            notasDiario = _context3.sent;
            res.json(notasDiario);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getNotasDiarioByDiarioId(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getNotasDiarioByDiarioId = getNotasDiarioByDiarioId;

var createNotaDiario = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body, idDiario, fecha, observaciones, newNotaDiario, notaDiarioSaved;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, idDiario = _req$body.idDiario, fecha = _req$body.fecha, observaciones = _req$body.observaciones;
            newNotaDiario = new _NotaDiario["default"]({
              idDiario: idDiario,
              fecha: fecha,
              observaciones: observaciones
            });
            _context4.next = 4;
            return newNotaDiario.save();

          case 4:
            notaDiarioSaved = _context4.sent;
            //codigos de estado. estado 201 nuevo recurso se ha creado
            res.status(201).json(notaDiarioSaved);

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function createNotaDiario(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.createNotaDiario = createNotaDiario;

var deleteNotaDiarioById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var notaDiarioId, deletedNotaDiario;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            notaDiarioId = req.params.notaDiarioId;
            _context5.next = 3;
            return _NotaDiario["default"].findByIdAndDelete(notaDiarioId);

          case 3:
            deletedNotaDiario = _context5.sent;
            console.log(deletedNotaDiario);
            res.status(204).json(deletedNotaDiario);

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteNotaDiarioById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteNotaDiarioById = deleteNotaDiarioById;

var updateNotaDiarioById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var updatedNotaDiario;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _NotaDiario["default"].findByIdAndUpdate(req.params.notaDiarioId, req.body, {
              "new": true
            });

          case 2:
            updatedNotaDiario = _context6.sent;
            console.log(req.body);
            res.status(200).json(updatedNotaDiario);

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function updateNotaDiarioById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.updateNotaDiarioById = updateNotaDiarioById;