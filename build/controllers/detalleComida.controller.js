"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateDetalleComidaById = exports.deleteDetalleComidaById = exports.createDetallesComida = exports.getDetallesComidaByComidaId = exports.getDetalleComidaById = exports.getDetallesComida = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _DetalleComida = _interopRequireDefault(require("../models/DetalleComida"));

var getDetallesComida = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var detallesComida;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _DetalleComida["default"].find();

          case 2:
            detallesComida = _context.sent;
            res.json(detallesComida);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getDetallesComida(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getDetallesComida = getDetallesComida;

var getDetalleComidaById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var detalleComidaId, detalleComida;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            detalleComidaId = req.params.detalleComidaId;
            _context2.next = 3;
            return _DetalleComida["default"].findById(detalleComidaId).populate('idAlimento');

          case 3:
            detalleComida = _context2.sent;
            res.json(detalleComida);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getDetalleComidaById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getDetalleComidaById = getDetalleComidaById;

var getDetallesComidaByComidaId = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var comidaId, detallesComida;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            comidaId = req.params.comidaId;
            _context3.next = 3;
            return _DetalleComida["default"].find({
              idComida: comidaId
            }).populate('idAlimento');

          case 3:
            detallesComida = _context3.sent;
            res.json(detallesComida);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getDetallesComidaByComidaId(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getDetallesComidaByComidaId = getDetallesComidaByComidaId;

var createDetallesComida = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body, idComida, idAlimento, cantidad, proteinasDetalleComida, chsDetalleComida, grasasDetalleComida, kcalDetalleComida, observaciones, newDetalleComida, detalleComidaSaved;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, idComida = _req$body.idComida, idAlimento = _req$body.idAlimento, cantidad = _req$body.cantidad, proteinasDetalleComida = _req$body.proteinasDetalleComida, chsDetalleComida = _req$body.chsDetalleComida, grasasDetalleComida = _req$body.grasasDetalleComida, kcalDetalleComida = _req$body.kcalDetalleComida, observaciones = _req$body.observaciones;
            newDetalleComida = new _DetalleComida["default"]({
              idComida: idComida,
              idAlimento: idAlimento,
              cantidad: cantidad,
              proteinasDetalleComida: proteinasDetalleComida,
              chsDetalleComida: chsDetalleComida,
              grasasDetalleComida: grasasDetalleComida,
              kcalDetalleComida: kcalDetalleComida,
              observaciones: observaciones
            });
            _context4.next = 4;
            return newDetalleComida.save();

          case 4:
            detalleComidaSaved = _context4.sent;
            res.status(201).json(detalleComidaSaved);

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function createDetallesComida(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.createDetallesComida = createDetallesComida;

var deleteDetalleComidaById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var detalleComidaId, deletedDetalleComida;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            detalleComidaId = req.params.detalleComidaId;
            _context5.next = 3;
            return _DetalleComida["default"].findByIdAndDelete(detalleComidaId);

          case 3:
            deletedDetalleComida = _context5.sent;
            res.status(204).json(deletedDetalleComida);

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteDetalleComidaById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteDetalleComidaById = deleteDetalleComidaById;

var updateDetalleComidaById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var updatedDetalleComida;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _DetalleComida["default"].findByIdAndUpdate(req.params.detalleComidaId, req.body, {
              "new": true
            });

          case 2:
            updatedDetalleComida = _context6.sent;
            console.log(req.body);
            res.status(200).json(updatedDetalleComida);

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function updateDetalleComidaById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.updateDetalleComidaById = updateDetalleComidaById;