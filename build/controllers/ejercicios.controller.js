"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateEjercicioById = exports.deleteEjercicioById = exports.createEjercicio = exports.getEjercicioByGrupoMuscular = exports.getEjercicioById = exports.getEjercicios = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Ejercicio = _interopRequireDefault(require("../models/Ejercicio"));

var getEjercicios = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var ejercicios;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Ejercicio["default"].find();

          case 2:
            ejercicios = _context.sent;
            res.json(ejercicios);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getEjercicios(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getEjercicios = getEjercicios;

var getEjercicioById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var ejercicioId, ejercicio;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            ejercicioId = req.params.ejercicioId;
            _context2.next = 3;
            return _Ejercicio["default"].findById(ejercicioId);

          case 3:
            ejercicio = _context2.sent;
            res.json(ejercicio);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getEjercicioById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getEjercicioById = getEjercicioById;

var getEjercicioByGrupoMuscular = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var grupoMuscular, ejercicios;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            grupoMuscular = req.params.grupoMuscular;
            _context3.next = 3;
            return _Ejercicio["default"].find({
              "grupoMuscular": grupoMuscular
            });

          case 3:
            ejercicios = _context3.sent;
            res.json(ejercicios);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getEjercicioByGrupoMuscular(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getEjercicioByGrupoMuscular = getEjercicioByGrupoMuscular;

var createEjercicio = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body, nombre, descripcion, grupoMuscular, imagen, newEjercicio, ejercicioSaved;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, descripcion = _req$body.descripcion, grupoMuscular = _req$body.grupoMuscular, imagen = _req$body.imagen;
            newEjercicio = new _Ejercicio["default"]({
              nombre: nombre,
              descripcion: descripcion,
              grupoMuscular: grupoMuscular,
              imagen: imagen
            });
            _context4.next = 4;
            return newEjercicio.save();

          case 4:
            ejercicioSaved = _context4.sent;
            //codigos de estado. estado 201 nuevo recurso se ha creado
            res.status(201).json(ejercicioSaved);

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function createEjercicio(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.createEjercicio = createEjercicio;

var deleteEjercicioById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var ejercicioId, deletedEjercicio;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            ejercicioId = req.params.ejercicioId;
            _context5.next = 3;
            return _Ejercicio["default"].findByIdAndDelete(ejercicioId);

          case 3:
            deletedEjercicio = _context5.sent;
            console.log(deletedEjercicio);
            res.status(204).json(deletedEjercicio);

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteEjercicioById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteEjercicioById = deleteEjercicioById;

var updateEjercicioById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var updatedEjercicio;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _Ejercicio["default"].findByIdAndUpdate(req.params.ejercicioId, req.body, {
              "new": true
            });

          case 2:
            updatedEjercicio = _context6.sent;
            console.log(req.body);
            res.status(200).json(updatedEjercicio);

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function updateEjercicioById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.updateEjercicioById = updateEjercicioById;