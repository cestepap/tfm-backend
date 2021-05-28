"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var db_URI = 'mongodb+srv://carlos:qOexbzjWbNtPju4x@cluster0.9efsg.mongodb.net/thegymtool?authSource=admin&replicaSet=atlas-vgv8m9-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';

_mongoose["default"].connect(db_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(function (db) {
  return console.log('DB is connected');
})["catch"](function (err) {
  return console.error(err);
}); // mongoose
// .connect('mongodb://localhost/getfit2', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
// 	useCreateIndex: true
// })
// .then((db) => console.log('DB is connecteds'))
// .catch((err) => console.error(err));