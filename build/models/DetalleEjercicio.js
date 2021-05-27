"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var detalleEjercicioSchema = new _mongoose.Schema({
  idDiaSemanaRutina: {
    // para referenciar con el modelo DiaSemanaRutina
    ref: 'DiaSemanaRutina',
    type: _mongoose.Schema.Types.ObjectId
  },
  idEjercicio: {
    // para referenciar con el modelo Ejercicio
    ref: 'Ejercicio',
    type: _mongoose.Schema.Types.ObjectId
  },
  series: {
    type: String,
    required: true
  },
  repeticiones: {
    type: String,
    required: true
  },
  observaciones: {
    type: String
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('DetalleEjercicio', detalleEjercicioSchema);

exports["default"] = _default;