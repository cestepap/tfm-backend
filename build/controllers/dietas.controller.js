"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateDietaById = exports.deleteDietaById = exports.createDieta = exports.getDietasByIdCliente = exports.getDietasByIdEP = exports.getDieta = exports.getDietas = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Dieta = _interopRequireDefault(require("../models/Dieta"));

var getDietas = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var dietas;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Dieta["default"].find().populate('idCliente').populate('idProfesional');

          case 2:
            dietas = _context.sent;
            // const rutinas = await Rutina.find();
            res.json(dietas);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getDietas(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getDietas = getDietas;

var getDieta = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var dietaId, dieta;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            dietaId = req.params.dietaId;
            _context2.next = 3;
            return _Dieta["default"].findById(dietaId).populate('idCliente').populate('idProfesional');

          case 3:
            dieta = _context2.sent;
            res.json(dieta);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getDieta(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getDieta = getDieta;

var getDietasByIdEP = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _idEP, dietas;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _idEP = req.params._idEP;
            _context3.next = 3;
            return _Dieta["default"].find({
              idProfesional: _idEP
            }).populate('idCliente').populate('idProfesional');

          case 3:
            dietas = _context3.sent;
            res.json(dietas);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getDietasByIdEP(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getDietasByIdEP = getDietasByIdEP;

var getDietasByIdCliente = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _idCliente, dietas;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _idCliente = req.params._idCliente;
            _context4.next = 3;
            return _Dieta["default"].find({
              idCliente: _idCliente
            }).populate('idCliente').populate('idProfesional');

          case 3:
            dietas = _context4.sent;
            res.json(dietas);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getDietasByIdCliente(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getDietasByIdCliente = getDietasByIdCliente;

var createDieta = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$body, idCliente, idProfesional, titulo, descripcion, fechaInicio, estado, proteinasTotalesSemana, chsTotalesSemana, grasasTotalesSemana, kcalTotalesSemana, diaSemanaDieta, newDieta, dietaSaved;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body = req.body, idCliente = _req$body.idCliente, idProfesional = _req$body.idProfesional, titulo = _req$body.titulo, descripcion = _req$body.descripcion, fechaInicio = _req$body.fechaInicio, estado = _req$body.estado, proteinasTotalesSemana = _req$body.proteinasTotalesSemana, chsTotalesSemana = _req$body.chsTotalesSemana, grasasTotalesSemana = _req$body.grasasTotalesSemana, kcalTotalesSemana = _req$body.kcalTotalesSemana, diaSemanaDieta = _req$body.diaSemanaDieta;
            newDieta = new _Dieta["default"]({
              idCliente: idCliente,
              idProfesional: idProfesional,
              titulo: titulo,
              descripcion: descripcion,
              fechaInicio: fechaInicio,
              estado: estado,
              proteinasTotalesSemana: proteinasTotalesSemana,
              chsTotalesSemana: chsTotalesSemana,
              grasasTotalesSemana: grasasTotalesSemana,
              kcalTotalesSemana: kcalTotalesSemana,
              diaSemanaDieta: diaSemanaDieta
            });
            _context5.next = 4;
            return newDieta.save();

          case 4:
            dietaSaved = _context5.sent;
            res.status(201).json(dietaSaved);

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function createDieta(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.createDieta = createDieta;

var deleteDietaById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var dietaId, deletedDieta;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            dietaId = req.params.dietaId;
            _context6.next = 3;
            return _Dieta["default"].findByIdAndDelete(dietaId);

          case 3:
            deletedDieta = _context6.sent;
            res.status(204).json(deletedDieta);

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function deleteDietaById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteDietaById = deleteDietaById;

var updateDietaById = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var updatedDieta;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _Dieta["default"].findByIdAndUpdate(req.params.dietaId, req.body, {
              "new": true
            });

          case 2:
            updatedDieta = _context7.sent;
            console.log(req.body);
            res.status(200).json(updatedDieta);

          case 5:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function updateDietaById(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.updateDietaById = updateDietaById;