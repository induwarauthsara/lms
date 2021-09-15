"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tab = exports.Tabs = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: white;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  possion: relative;\n  margin: 5px;\n  padding: 5px;\n  background-color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: yellow;\n  padding: 3rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Tabs = _styledComponents["default"].div(_templateObject());

exports.Tabs = Tabs;

var Tab = _styledComponents["default"].button(_templateObject2(), function (props) {
  return props.active ? "${(props) => props.theme.primary.main}" : "";
});

exports.Tab = Tab;