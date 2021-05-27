"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _package = _interopRequireDefault(require("../package.json"));

var _path = _interopRequireDefault(require("path"));

var _photo = _interopRequireDefault(require("./routes/photo.routes"));

var _initialSetup = require("./libs/initialSetup");

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _user = _interopRequireDefault(require("./routes/user.routes"));

var _ejercicio = _interopRequireDefault(require("./routes/ejercicio.routes"));

var _alimento = _interopRequireDefault(require("./routes/alimento.routes"));

var _rutina = _interopRequireDefault(require("./routes/rutina.routes"));

var _diaSemanaRutina = _interopRequireDefault(require("./routes/diaSemanaRutina.routes"));

var _detalleEjercicio = _interopRequireDefault(require("./routes/detalleEjercicio.routes"));

var _dieta = _interopRequireDefault(require("./routes/dieta.routes"));

var _diaSemanaDieta = _interopRequireDefault(require("./routes/diaSemanaDieta.routes"));

var _comida = _interopRequireDefault(require("./routes/comida.routes"));

var _detalleComida = _interopRequireDefault(require("./routes/detalleComida.routes"));

var _diario = _interopRequireDefault(require("./routes/diario.routes"));

var _notaDiario = _interopRequireDefault(require("./routes/notaDiario.routes"));

// configurar express
var cors = require('cors');

var app = (0, _express["default"])();
(0, _initialSetup.createRoles)();
app.set('pkg', _package["default"]); // app.use(cors({origin: "http://localhost:4200"}));

app.use(cors());
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.get('/', function (req, res) {
  // res.json({
  // 	author: app.get('pkg').author,
  // });
  res.send('hello');
}); // app.use('/api/products', productRoutes);

app.use('/api/auth', _auth["default"]);
app.use('/api/users', _user["default"]);
app.use('/api/ejercicios', _ejercicio["default"]);
app.use('/api/alimentos', _alimento["default"]);
app.use('/api/rutinas', _rutina["default"]);
app.use('/api/diasSemanaRutina', _diaSemanaRutina["default"]);
app.use('/api/detallesEjercicios', _detalleEjercicio["default"]);
app.use('/api/dietas', _dieta["default"]);
app.use('/api/diasSemanaDieta', _diaSemanaDieta["default"]);
app.use('/api/comidas', _comida["default"]);
app.use('/api/detallesComidas', _detalleComida["default"]);
app.use('/api/diarios', _diario["default"]);
app.use('/api/notasDiario', _notaDiario["default"]);
app.use('/api/photos', _photo["default"]);
app.use('/uploads', _express["default"]["static"](_path["default"].resolve('uploads')));
var _default = app;
exports["default"] = _default;