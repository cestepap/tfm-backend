"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateAlimentoById = exports.deleteAlimentoById = exports.createAlimento = exports.getAlimentoByGrupoAlimento = exports.getAlimentoById = exports.getAlimentos = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Alimento = _interopRequireDefault(require("../models/Alimento"));

var getAlimentos = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var alimentos;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Alimento["default"].find();

          case 2:
            alimentos = _context.sent;
            res.json(alimentos);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAlimentos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAlimentos = getAlimentos;

var getAlimentoById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var alimentoId, alimento;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            alimentoId = req.params.alimentoId;
            _context2.next = 3;
            return _Alimento["default"].findById(alimentoId);

          case 3:
            alimento = _context2.sent;
            res.json(alimento);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getAlimentoById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getAlimentoById = getAlimentoById;

var getAlimentoByGrupoAlimento = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var grupoAlimento, alimentos;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            grupoAlimento = req.params.grupoAlimento;
            _context3.next = 3;
            return _Alimento["default"].find({
              "grupoAlimento": grupoAlimento
            });

          case 3:
            alimentos = _context3.sent;
            res.json(alimentos);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getAlimentoByGrupoAlimento(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getAlimentoByGrupoAlimento = getAlimentoByGrupoAlimento;

var createAlimento = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body, nombre, descripcion, grupoAlimento, proteinas, carbohidratos, grasas, kcal, imagen, newAlimento, alimentoSaved;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, descripcion = _req$body.descripcion, grupoAlimento = _req$body.grupoAlimento, proteinas = _req$body.proteinas, carbohidratos = _req$body.carbohidratos, grasas = _req$body.grasas, kcal = _req$body.kcal, imagen = _req$body.imagen;
            newAlimento = new _Alimento["default"]({
              nombre: nombre,
              descripcion: descripcion,
              grupoAlimento: grupoAlimento,
              proteinas: proteinas,
              carbohidratos: carbohidratos,
              grasas: grasas,
              kcal: kcal,
              imagen: imagen
            });
            _context4.next = 4;
            return newAlimento.save();

          case 4:
            alimentoSaved = _context4.sent;
            //codigos de estado. estado 201 nuevo recurso se ha creado
            res.status(201).json(alimentoSaved);

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function createAlimento(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.createAlimento = createAlimento;

var deleteAlimentoById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var alimentoId, deletedAlimento;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            alimentoId = req.params.alimentoId;
            _context5.next = 3;
            return _Alimento["default"].findByIdAndDelete(alimentoId);

          case 3:
            deletedAlimento = _context5.sent;
            console.log(deletedAlimento);
            res.status(204).json(deletedAlimento);

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteAlimentoById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteAlimentoById = deleteAlimentoById;

var updateAlimentoById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var updatedAlimento;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _Alimento["default"].findByIdAndUpdate(req.params.alimentoId, req.body, {
              "new": true
            });

          case 2:
            updatedAlimento = _context6.sent;
            console.log(req.body);
            res.status(200).json(updatedAlimento);

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function updateAlimentoById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.updateAlimentoById = updateAlimentoById;