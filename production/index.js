'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _platform = require('platform');

var _platform2 = _interopRequireDefault(_platform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 3000;
var app = (0, _express2.default)();
var env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  app.use((0, _morgan2.default)('dev'));
}

app.enable('trust proxy');

app.get('/api/whoami', function (req, res) {
  var platformInfo = _platform2.default.parse(req.headers['user-agent']);
  res.json({
    ipaddress: req.ip,
    language: req.acceptsLanguages('en-US', 'en-CA'),
    software: platformInfo.os.toString()
  });
});

// TODO: Set up Catch statement + general Error Handler

app.listen(port, function () {});

exports.default = app;