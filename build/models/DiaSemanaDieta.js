"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var diaSemanaDietaSchema = new _mongoose.Schema({
  idDieta: {
    ref: 'Dieta',
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
  proteinasTotalesDia: {
    type: String,
    "default": ""
  },
  chsTotalesDia: {
    type: String,
    "default": ""
  },
  grasasTotalesDia: {
    type: String,
    "default": ""
  },
  kcalTotalesDia: {
    type: String,
    "default": ""
  },
  comida: [{
    type: String
  }]
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('DiaSemanaDieta', diaSemanaDietaSchema);

exports["default"] = _default;