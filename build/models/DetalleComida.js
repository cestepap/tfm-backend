"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var detalleComidaSchema = new _mongoose.Schema({
  idComida: {
    // para referenciar con el modelo DiaSemanaRutina
    ref: 'Comida',
    type: _mongoose.Schema.Types.ObjectId
  },
  idAlimento: {
    // para referenciar con el modelo Alimento
    ref: 'Alimento',
    type: _mongoose.Schema.Types.ObjectId
  },
  cantidad: {
    type: Number,
    required: true
  },
  proteinasDetalleComida: {
    type: Number,
    required: true
  },
  chsDetalleComida: {
    type: Number,
    required: true
  },
  grasasDetalleComida: {
    type: Number,
    required: true
  },
  kcalDetalleComida: {
    type: Number,
    required: true
  },
  observaciones: {
    type: String
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('DetalleComida', detalleComidaSchema);

exports["default"] = _default;