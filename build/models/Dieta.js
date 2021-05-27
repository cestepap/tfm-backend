"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var dietaSchema = new _mongoose.Schema({
  idCliente: {
    // para referenciar con el modelo User
    ref: 'User',
    type: _mongoose.Schema.Types.ObjectId
  },
  idProfesional: {
    // para referenciar con el modelo User
    ref: 'User',
    type: _mongoose.Schema.Types.ObjectId
  },
  titulo: {
    type: String,
    required: true
  },
  descripcion: {
    type: String
  },
  fechaInicio: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    required: true
  },
  proteinasTotalesSemana: {
    type: Number,
    "default": 0
  },
  chsTotalesSemana: {
    type: Number,
    "default": 0
  },
  grasasTotalesSemana: {
    type: Number,
    "default": 0
  },
  kcalTotalesSemana: {
    type: Number,
    "default": 0
  },
  diaSemanaDieta: [{
    type: String
  }]
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Dieta', dietaSchema);

exports["default"] = _default;