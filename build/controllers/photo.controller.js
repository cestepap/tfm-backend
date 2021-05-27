"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePhoto = exports.deletePhoto = exports.getPhoto = exports.createPhoto = exports.getPhotos = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Photo = _interopRequireDefault(require("../models/Photo"));

var _path = _interopRequireDefault(require("path"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

// modulo que permite usar fs acceso a ficheros y async await
var getPhotos = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var photos;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Photo["default"].find();

          case 2:
            photos = _context.sent;
            _context.next = 5;
            return res.json(photos);

          case 5:
            return _context.abrupt("return", _context.sent);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getPhotos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getPhotos = getPhotos;

var createPhoto = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, title, description, newPhoto, photo;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, title = _req$body.title, description = _req$body.description; // console.log(req.file);

            newPhoto = {
              title: title,
              description: description,
              imagePath: req.file.path
            };
            photo = new _Photo["default"](newPhoto);
            console.log(photo);
            _context2.next = 6;
            return photo.save();

          case 6:
            _context2.next = 8;
            return res.json({
              message: 'Photo succesfully saved',
              photo: photo
            });

          case 8:
            return _context2.abrupt("return", _context2.sent);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function createPhoto(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createPhoto = createPhoto;

var getPhoto = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, photo;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return _Photo["default"].findById(id);

          case 3:
            photo = _context3.sent;
            _context3.next = 6;
            return res.json(photo);

          case 6:
            return _context3.abrupt("return", _context3.sent);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getPhoto(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getPhoto = getPhoto;

var deletePhoto = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, photo;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id; // para borrar la foto de mongodb

            _context4.next = 3;
            return _Photo["default"].findByIdAndDelete(id);

          case 3:
            photo = _context4.sent;

            if (!photo) {
              _context4.next = 7;
              break;
            }

            _context4.next = 7;
            return _fsExtra["default"].unlink(_path["default"].resolve(photo.imagePath));

          case 7:
            _context4.next = 9;
            return res.json({
              message: 'photo deleted',
              photo: photo
            });

          case 9:
            return _context4.abrupt("return", _context4.sent);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deletePhoto(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deletePhoto = deletePhoto;

var updatePhoto = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, _req$body2, title, description, updatedPhoto;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, title = _req$body2.title, description = _req$body2.description;
            _context5.next = 4;
            return _Photo["default"].findByIdAndUpdate(id, {
              title: title,
              description: description
            }, {
              "new": true
            });

          case 4:
            updatedPhoto = _context5.sent;
            return _context5.abrupt("return", res.json({
              message: 'photo updated',
              updatedPhoto: updatedPhoto
            }));

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function updatePhoto(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updatePhoto = updatePhoto;