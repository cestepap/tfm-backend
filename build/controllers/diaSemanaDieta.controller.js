"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateDiaSemanaDietaById = exports.deleteDiaSemanaDietaById = exports.createDiaSemanaDieta = exports.getDiasSemanaDietaByDietaId = exports.getDiaSemanaDietaById = exports.getDiasSemanaDieta = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _DiaSemanaDieta = _interopRequireDefault(require("../models/DiaSemanaDieta"));

var getDiasSemanaDieta = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var diaSemanasDieta;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _DiaSemanaDieta["default"].find();

          case 2:
            diaSemanasDieta = _context.sent;
            res.json(diaSemanasDieta);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getDiasSemanaDieta(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getDiasSemanaDieta = getDiasSemanaDieta;

var getDiaSemanaDietaById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var diaSemanaDietaId, diaSemanaDieta;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            diaSemanaDietaId = req.params.diaSemanaDietaId;
            _context2.next = 3;
            return _DiaSemanaDieta["default"].findById(diaSemanaDietaId);

          case 3:
            diaSemanaDieta = _context2.sent;
            res.json(diaSemanaDieta);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getDiaSemanaDietaById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getDiaSemanaDietaById = getDiaSemanaDietaById;

var getDiasSemanaDietaByDietaId = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var dietaId, diasSemanaDieta;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            dietaId = req.params.dietaId;
            _context3.next = 3;
            return _DiaSemanaDieta["default"].find({
              idDieta: dietaId
            });

          case 3:
            diasSemanaDieta = _context3.sent;
            res.json(diasSemanaDieta);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getDiasSemanaDietaByDietaId(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getDiasSemanaDietaByDietaId = getDiasSemanaDietaByDietaId;

var createDiaSemanaDieta = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body, idDieta, nombre, descripcion, proteinasTotalesDia, chsTotalesDia, grasasTotalesDia, kcalTotalesDia, comida, newDiaSemanaDieta;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, idDieta = _req$body.idDieta, nombre = _req$body.nombre, descripcion = _req$body.descripcion, proteinasTotalesDia = _req$body.proteinasTotalesDia, chsTotalesDia = _req$body.chsTotalesDia, grasasTotalesDia = _req$body.grasasTotalesDia, kcalTotalesDia = _req$body.kcalTotalesDia, comida = _req$body.comida;
            newDiaSemanaDieta = new _DiaSemanaDieta["default"]({
              idDieta: idDieta,
              nombre: nombre,
              descripcion: descripcion,
              proteinasTotalesDia: proteinasTotalesDia,
              chsTotalesDia: chsTotalesDia,
              grasasTotalesDia: grasasTotalesDia,
              kcalTotalesDia: kcalTotalesDia,
              comida: comida
            }); // const diaSemanaDietaSaved = await newDiaSemanaDieta.save();
            // if (!diaSemanaDietaSaved)
            // 	return res
            // 		.status(400)
            // 		.json({ message: 'Error durante el proceso' });
            // else {
            // 	res.status(204).json(diaSemanaDietaSaved);
            // }

            res.status(204).json(req.body);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function createDiaSemanaDieta(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.createDiaSemanaDieta = createDiaSemanaDieta;

var deleteDiaSemanaDietaById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var diaSemanaDietaId, deletedDiaSemanaDieta;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            diaSemanaDietaId = req.params.diaSemanaDietaId;
            _context5.next = 3;
            return _DiaSemanaDieta["default"].findByIdAndDelete(diaSemanaDietaId);

          case 3:
            deletedDiaSemanaDieta = _context5.sent;
            res.status(204).json(deletedDiaSemanaDieta);

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteDiaSemanaDietaById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteDiaSemanaDietaById = deleteDiaSemanaDietaById;

var updateDiaSemanaDietaById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var updatedDiaSemanaDieta;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _DiaSemanaDieta["default"].findByIdAndUpdate(req.params.diaSemanaDietaId, req.body, {
              "new": true
            });

          case 2:
            updatedDiaSemanaDieta = _context6.sent;
            res.status(200).json(updatedDiaSemanaDieta);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function updateDiaSemanaDietaById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.updateDiaSemanaDietaById = updateDiaSemanaDietaById;