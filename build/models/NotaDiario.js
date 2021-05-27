"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var notaDiarioSchema = new _mongoose.Schema({
  idDiario: {
    // para referenciar con el modelo User
    ref: 'Diario',
    type: _mongoose.Schema.Types.ObjectId
  },
  fecha: {
    type: String
  },
  observaciones: {
    type: String
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('NotaDiario', notaDiarioSchema);

exports["default"] = _default;