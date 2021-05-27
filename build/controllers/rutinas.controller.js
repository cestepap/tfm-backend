"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateRutinaById = exports.deleteRutinaById = exports.createRutina = exports.getRutinasByIdCliente = exports.getRutinasByIdEP = exports.getRutina = exports.getRutinas = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Rutina = _interopRequireDefault(require("../models/Rutina"));

var getRutinas = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var rutinas;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Rutina["default"].find().populate("idCliente").populate("idProfesional");

          case 2:
            rutinas = _context.sent;
            // const rutinas = await Rutina.find();
            res.json(rutinas);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getRutinas(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getRutinas = getRutinas;

var getRutina = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var rutinaId, rutina;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            rutinaId = req.params.rutinaId;
            _context2.next = 3;
            return _Rutina["default"].findById(rutinaId).populate('idCliente').populate('idProfesional');

          case 3:
            rutina = _context2.sent;
            res.json(rutina);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getRutina(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getRutina = getRutina;

var getRutinasByIdEP = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _idEP, rutinas;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _idEP = req.params._idEP;
            _context3.next = 3;
            return _Rutina["default"].find({
              "idProfesional": _idEP
            }).populate('idCliente').populate('idProfesional');

          case 3:
            rutinas = _context3.sent;
            res.json(rutinas);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getRutinasByIdEP(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getRutinasByIdEP = getRutinasByIdEP;

var getRutinasByIdCliente = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _idCliente, rutinas;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _idCliente = req.params._idCliente;
            _context4.next = 3;
            return _Rutina["default"].find({
              "idCliente": _idCliente
            }).populate('idCliente').populate('idProfesional');

          case 3:
            rutinas = _context4.sent;
            res.json(rutinas);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getRutinasByIdCliente(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getRutinasByIdCliente = getRutinasByIdCliente;

var createRutina = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$body, idCliente, idProfesional, titulo, descripcion, fechaInicio, estado, diaSemanaRutina, newRutina, rutinaSaved;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            // res.json('creating rutinas');
            _req$body = req.body, idCliente = _req$body.idCliente, idProfesional = _req$body.idProfesional, titulo = _req$body.titulo, descripcion = _req$body.descripcion, fechaInicio = _req$body.fechaInicio, estado = _req$body.estado, diaSemanaRutina = _req$body.diaSemanaRutina;
            newRutina = new _Rutina["default"]({
              idCliente: idCliente,
              idProfesional: idProfesional,
              titulo: titulo,
              descripcion: descripcion,
              fechaInicio: fechaInicio,
              estado: estado,
              diaSemanaRutina: diaSemanaRutina
            });
            _context5.next = 4;
            return newRutina.save();

          case 4:
            rutinaSaved = _context5.sent;
            //codigos de estado. estado 201 nuevo recurso se ha creado
            res.status(201).json(rutinaSaved);

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function createRutina(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.createRutina = createRutina;

var deleteRutinaById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var rutinaId, deletedRutina;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            rutinaId = req.params.rutinaId;
            _context6.next = 3;
            return _Rutina["default"].findByIdAndDelete(rutinaId);

          case 3:
            deletedRutina = _context6.sent;
            console.log(rutinaId);
            res.status(204).json(deletedRutina);

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function deleteRutinaById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteRutinaById = deleteRutinaById;

var updateRutinaById = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var updatedRutina;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _Rutina["default"].findByIdAndUpdate(req.params.rutinaId, req.body, {
              "new": true
            });

          case 2:
            updatedRutina = _context7.sent;
            console.log(req.body);
            res.status(200).json(updatedRutina);

          case 5:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function updateRutinaById(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.updateRutinaById = updateRutinaById;