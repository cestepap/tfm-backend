"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var diaSemanaRutinaSchema = new _mongoose.Schema({
  idRutina: {
    // para referenciar con el modelo Rutina
    ref: 'Rutina',
    type: _mongoose.Schema.Types.ObjectId
  },
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  detalleEjercicios: [{
    // para referenciar con el modelo DetalleEjercicio dentro de un array
    // ref: 'DetalleEjercicio',
    // type: Schema.Types.ObjectId,
    type: String
  }]
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('DiaSemanaRutina', diaSemanaRutinaSchema);

exports["default"] = _default;