"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var diarioSchema = new _mongoose.Schema({
  idCliente: {
    // para referenciar con el modelo User
    ref: 'User',
    type: _mongoose.Schema.Types.ObjectId
  },
  descripcion: {
    type: String
  },
  notasDiario: [{
    type: String
  }]
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Diario', diarioSchema);

exports["default"] = _default;