"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var rutinaSchema = new _mongoose.Schema({
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
  diaSemanaRutina: [{
    type: String
  }]
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Rutina', rutinaSchema);

exports["default"] = _default;