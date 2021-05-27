"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateComidaById = exports.deleteComidaById = exports.createComida = exports.getComidasByDiaSemanaDietaId = exports.getComidaById = exports.getComidas = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Comida = _interopRequireDefault(require("../models/Comida"));

var getComidas = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var comidas;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Comida["default"].find();

          case 2:
            comidas = _context.sent;
            res.json(comidas);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getComidas(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getComidas = getComidas;

var getComidaById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var comidaId, comida;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            comidaId = req.params.comidaId;
            _context2.next = 3;
            return _Comida["default"].findById(comidaId);

          case 3:
            comida = _context2.sent;
            res.json(comida);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getComidaById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getComidaById = getComidaById;

var getComidasByDiaSemanaDietaId = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var diaSemanaDietaId, comidas;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            diaSemanaDietaId = req.params.diaSemanaDietaId;
            _context3.next = 3;
            return _Comida["default"].find({
              idDiaSemanaDieta: diaSemanaDietaId
            });

          case 3:
            comidas = _context3.sent;
            res.json(comidas);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getComidasByDiaSemanaDietaId(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getComidasByDiaSemanaDietaId = getComidasByDiaSemanaDietaId;

var createComida = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body, idDiaSemanaDieta, nombre, hora, proteinasComida, chsComida, grasasComida, kcalComida, detalleComida, newComida, comidaSaved;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, idDiaSemanaDieta = _req$body.idDiaSemanaDieta, nombre = _req$body.nombre, hora = _req$body.hora, proteinasComida = _req$body.proteinasComida, chsComida = _req$body.chsComida, grasasComida = _req$body.grasasComida, kcalComida = _req$body.kcalComida, detalleComida = _req$body.detalleComida;
            newComida = new _Comida["default"]({
              idDiaSemanaDieta: idDiaSemanaDieta,
              nombre: nombre,
              hora: hora,
              proteinasComida: proteinasComida,
              chsComida: chsComida,
              grasasComida: grasasComida,
              kcalComida: kcalComida,
              detalleComida: detalleComida
            });
            _context4.next = 4;
            return newComida.save();

          case 4:
            comidaSaved = _context4.sent;
            res.status(201).json(comidaSaved);

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function createComida(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.createComida = createComida;

var deleteComidaById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var comidaId, deletedComida;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            comidaId = req.params.comidaId;
            _context5.next = 3;
            return _Comida["default"].findByIdAndDelete(comidaId);

          case 3:
            deletedComida = _context5.sent;
            res.status(204).json(deletedComida);

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteComidaById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteComidaById = deleteComidaById;

var updateComidaById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var updatedComida;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _Comida["default"].findByIdAndUpdate(req.params.comidaId, req.body, {
              "new": true
            });

          case 2:
            updatedComida = _context6.sent;
            res.status(200).json(updatedComida);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function updateComidaById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.updateComidaById = updateComidaById;