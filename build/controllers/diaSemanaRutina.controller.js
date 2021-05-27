"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateDiaSemanaRutinaById = exports.deleteDiaSemanaRutinaById = exports.createDiaSemanaRutina = exports.getDiasSemanaRutinaByRutinaId = exports.getDiaSemanaRutinaById = exports.getDiasSemanaRutina = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _DiaSemanaRutina = _interopRequireDefault(require("../models/DiaSemanaRutina"));

var getDiasSemanaRutina = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var diasSemanasRutinas;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _DiaSemanaRutina["default"].find();

          case 2:
            diasSemanasRutinas = _context.sent;
            res.json(diasSemanasRutinas);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getDiasSemanaRutina(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getDiasSemanaRutina = getDiasSemanaRutina;

var getDiaSemanaRutinaById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var diaSemanaRutinaId, diaSemanaRutina;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            diaSemanaRutinaId = req.params.diaSemanaRutinaId;
            _context2.next = 3;
            return _DiaSemanaRutina["default"].findById(diaSemanaRutinaId);

          case 3:
            diaSemanaRutina = _context2.sent;
            res.json(diaSemanaRutina);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getDiaSemanaRutinaById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getDiaSemanaRutinaById = getDiaSemanaRutinaById;

var getDiasSemanaRutinaByRutinaId = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var rutinaId, diasSemanaRutina;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            rutinaId = req.params.rutinaId;
            _context3.next = 3;
            return _DiaSemanaRutina["default"].find({
              "idRutina": rutinaId
            });

          case 3:
            diasSemanaRutina = _context3.sent;
            res.json(diasSemanaRutina);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getDiasSemanaRutinaByRutinaId(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getDiasSemanaRutinaByRutinaId = getDiasSemanaRutinaByRutinaId;

var createDiaSemanaRutina = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body, idRutina, nombre, descripcion, detalleEjercicios, newDiaSemanaRutina, diaSemanaRutinaSaved;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, idRutina = _req$body.idRutina, nombre = _req$body.nombre, descripcion = _req$body.descripcion, detalleEjercicios = _req$body.detalleEjercicios;
            newDiaSemanaRutina = new _DiaSemanaRutina["default"]({
              idRutina: idRutina,
              nombre: nombre,
              descripcion: descripcion,
              detalleEjercicios: detalleEjercicios
            });
            _context4.next = 4;
            return newDiaSemanaRutina.save();

          case 4:
            diaSemanaRutinaSaved = _context4.sent;
            res.status(201).json(diaSemanaRutinaSaved);

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function createDiaSemanaRutina(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.createDiaSemanaRutina = createDiaSemanaRutina;

var deleteDiaSemanaRutinaById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var diaSemanaRutinaId, deletedDiaSemanaRutina;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            diaSemanaRutinaId = req.params.diaSemanaRutinaId;
            _context5.next = 3;
            return _DiaSemanaRutina["default"].findByIdAndDelete(diaSemanaRutinaId);

          case 3:
            deletedDiaSemanaRutina = _context5.sent;
            res.status(204).json(deletedDiaSemanaRutina);

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteDiaSemanaRutinaById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteDiaSemanaRutinaById = deleteDiaSemanaRutinaById;

var updateDiaSemanaRutinaById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var updatedDiaSemanaRutina;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _DiaSemanaRutina["default"].findByIdAndUpdate(req.params.diaSemanaRutinaId, req.body, {
              "new": true
            });

          case 2:
            updatedDiaSemanaRutina = _context6.sent;
            res.status(200).json(updatedDiaSemanaRutina);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function updateDiaSemanaRutinaById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.updateDiaSemanaRutinaById = updateDiaSemanaRutinaById;