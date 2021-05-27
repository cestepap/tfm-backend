"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateDetalleEjercicioById = exports.deleteDetalleEjercicioById = exports.createDetalleEjercicio = exports.getDetallesEjerciciosByDiaSemanaRutinaId = exports.getDetalleEjercicioById = exports.getDetallesEjercicios = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _DetalleEjercicio = _interopRequireDefault(require("../models/DetalleEjercicio"));

var getDetallesEjercicios = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var detallesEjercicios;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _DetalleEjercicio["default"].find();

          case 2:
            detallesEjercicios = _context.sent;
            res.json(detallesEjercicios);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getDetallesEjercicios(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // export const getDetalleEjercicioByIdandPopulate = async (req, res) => {
//     const {detalleEjercicioId} = req.params;
// 	const detalleEjercicio = await DetalleEjercicio.findById(detalleEjercicioId).populate("idEjercicio");
// 	res.json(detalleEjercicio);
// };


exports.getDetallesEjercicios = getDetallesEjercicios;

var getDetalleEjercicioById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var detalleEjercicioId, detalleEjercicio;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            detalleEjercicioId = req.params.detalleEjercicioId;
            _context2.next = 3;
            return _DetalleEjercicio["default"].findById(detalleEjercicioId).populate("idEjercicio");

          case 3:
            detalleEjercicio = _context2.sent;
            res.json(detalleEjercicio);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getDetalleEjercicioById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getDetalleEjercicioById = getDetalleEjercicioById;

var getDetallesEjerciciosByDiaSemanaRutinaId = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var diaSemanaRutinaId, detallesEjercicios;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            diaSemanaRutinaId = req.params.diaSemanaRutinaId;
            _context3.next = 3;
            return _DetalleEjercicio["default"].find({
              "idDiaSemanaRutina": diaSemanaRutinaId
            }).populate("idEjercicio");

          case 3:
            detallesEjercicios = _context3.sent;
            res.json(detallesEjercicios);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getDetallesEjerciciosByDiaSemanaRutinaId(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getDetallesEjerciciosByDiaSemanaRutinaId = getDetallesEjerciciosByDiaSemanaRutinaId;

var createDetalleEjercicio = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body, idDiaSemanaRutina, idEjercicio, series, repeticiones, observaciones, newDetalleEjercicio, detalleEjercicioSaved;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, idDiaSemanaRutina = _req$body.idDiaSemanaRutina, idEjercicio = _req$body.idEjercicio, series = _req$body.series, repeticiones = _req$body.repeticiones, observaciones = _req$body.observaciones;
            newDetalleEjercicio = new _DetalleEjercicio["default"]({
              idDiaSemanaRutina: idDiaSemanaRutina,
              idEjercicio: idEjercicio,
              series: series,
              repeticiones: repeticiones,
              observaciones: observaciones
            });
            _context4.next = 4;
            return newDetalleEjercicio.save();

          case 4:
            detalleEjercicioSaved = _context4.sent;
            //codigos de estado. estado 201 nuevo recurso se ha creado
            res.status(201).json(detalleEjercicioSaved);

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function createDetalleEjercicio(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.createDetalleEjercicio = createDetalleEjercicio;

var deleteDetalleEjercicioById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var detalleEjercicioId, deletedDetalleEjercicio;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            detalleEjercicioId = req.params.detalleEjercicioId;
            _context5.next = 3;
            return _DetalleEjercicio["default"].findByIdAndDelete(detalleEjercicioId);

          case 3:
            deletedDetalleEjercicio = _context5.sent;
            res.status(204).json(deletedDetalleEjercicio);

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteDetalleEjercicioById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteDetalleEjercicioById = deleteDetalleEjercicioById;

var updateDetalleEjercicioById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var updatedDetalleEjercicio;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _DetalleEjercicio["default"].findByIdAndUpdate(req.params.detalleEjercicioId, req.body, {
              "new": true
            });

          case 2:
            updatedDetalleEjercicio = _context6.sent;
            console.log(req.body);
            res.status(200).json(updatedDetalleEjercicio);

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function updateDetalleEjercicioById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.updateDetalleEjercicioById = updateDetalleEjercicioById;