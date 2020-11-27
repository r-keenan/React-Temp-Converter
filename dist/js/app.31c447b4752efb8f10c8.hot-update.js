webpackHotUpdate("app",{

/***/ "./ui/components/validator.js":
/*!************************************!*\
  !*** ./ui/components/validator.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Validator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Validator =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Validator, _React$Component);

  function Validator(props) {
    var _this;

    _classCallCheck(this, Validator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Validator).call(this, props));
    _this.state = {
      options: [{
        value: 'rankine',
        text: 'Rankine'
      }, {
        value: 'celsius',
        text: 'Celsius'
      }, {
        value: 'fahrenheit',
        text: 'Fahrenheit'
      }, {
        value: 'liters',
        text: 'Liters'
      }, {
        value: 'tablespoons',
        text: 'Tablespoons'
      }, {
        value: 'cubic-inches',
        text: 'Cubic Inches'
      }, {
        value: 'rankine',
        text: 'Rankine'
      }]
    };
    return _this;
  }

  _createClass(Validator, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "numericalValue"
      }, "Input Numerical Value"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "form-control",
        type: "text",
        id: "numericalValue"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "unitOfMeasure"
      }, "Input Unit of Measure"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        className: "form-control",
        defaultValue: "default"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "default",
        disabled: true
      }, "Please select"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "rankine"
      }, "Rankine"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Celsius"
      }, "Celsius"))));
    }
  }]);

  return Validator;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ })

})
//# sourceMappingURL=app.31c447b4752efb8f10c8.hot-update.js.map