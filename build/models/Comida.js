"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var comidaSchema = new _mongoose.Schema({
  idDiaSemanaDieta: {
    ref: 'DiaSemanaDieta',
    type: _mongoose.Schema.Types.ObjectId
  },
  nombre: {
    type: String,
    required: true
  },
  hora: {
    type: String,
    required: true
  },
  proteinasComida: {
    type: Number,
    required: false
  },
  chsComida: {
    type: Number,
    required: false
  },
  grasasComida: {
    type: Number,
    required: false
  },
  kcalComida: {
    type: Number,
    required: false
  },
  detalleComida: [{}]
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Comida', comidaSchema);

exports["default"] = _default;