"use strict";

var _core = _interopRequireDefault(require('vendor.js')(0));

var _x = _interopRequireDefault(require('vendor.js')(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].use(_x["default"]);

_core["default"].app({
  // 小程序启动执行方法
  onLaunch: function onLaunch(options) {}
}, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} });