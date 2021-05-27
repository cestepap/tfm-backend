"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var alimentoSchema = new _mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String
  },
  grupoAlimento: {
    type: String
  },
  proteinas: {
    type: Number
  },
  carbohidratos: {
    type: Number
  },
  grasas: {
    type: Number
  },
  kcal: {
    type: Number
  },
  imagen: {
    type: String
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Alimento', alimentoSchema);

exports["default"] = _default;