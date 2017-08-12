'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _glamor = require('glamor');

var _glamorous = require('glamorous');

var _glamorous2 = _interopRequireDefault(_glamorous);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jbrown/courses/reactcoach/site/pages/index.js?entry';


var ReactCoach = function (_Component) {
  (0, _inherits3.default)(ReactCoach, _Component);

  function ReactCoach() {
    (0, _classCallCheck3.default)(this, ReactCoach);

    return (0, _possibleConstructorReturn3.default)(this, (ReactCoach.__proto__ || (0, _getPrototypeOf2.default)(ReactCoach)).apply(this, arguments));
  }

  (0, _createClass3.default)(ReactCoach, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, 'Welcome to React Coach'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, 'We\'ll teach all you need to know about React and the ecosystem through tutorials, screencasts, and interactive demos.'));
    }
  }]);

  return ReactCoach;
}(_react.Component);

exports.default = ReactCoach;