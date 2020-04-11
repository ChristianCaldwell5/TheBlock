webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/login/loginPanel.js":
/*!****************************************!*\
  !*** ./components/login/loginPanel.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var country_state_city__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! country-state-city */ "./node_modules/country-state-city/dist/index.js");
/* harmony import */ var country_state_city__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(country_state_city__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/chris/Documents/Capstone2/TheBlock/components/login/loginPanel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // Import Interfaces`



var Initial = function Initial() {
  return __jsx("div", {
    id: "initial",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("h1", {
    className: "the-block-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "The Block"), __jsx("hr", {
    id: "login-hr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx("button", {
    id: "login-btn",
    className: "the-block-btn--large clear",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Sign In"), __jsx("button", {
    id: "register-btn",
    className: "the-block-btn--large clear",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Register"), __jsx("a", {
    className: "clear",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "About Us"));
};

var Login = function Login() {
  return __jsx("div", {
    id: "login",
    className: "hide-element",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("h1", {
    className: "the-block-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "The Block - Login"), __jsx("hr", {
    id: "login-hr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx("input", {
    className: "the-block-inp--large clear",
    name: "l-username",
    placeholder: "Username",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx("input", {
    className: "the-block-inp--large clear",
    name: "l-password",
    placeholder: "Password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("button", {
    id: "login-submit-btn",
    className: "the-block-btn--large clear",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Login"), __jsx("button", {
    id: "login-back-btn",
    className: "the-block-btn--large clear",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Back"));
};

var SignUp_p1 = function SignUp_p1() {
  return __jsx("div", {
    id: "register1",
    className: "hide-element",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("h1", {
    className: "the-block-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "The Block - Register"), __jsx("hr", {
    id: "login-hr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx("input", {
    className: "the-block-inp--large clear",
    name: "username",
    placeholder: "Create Username",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx("input", {
    className: "the-block-inp--large clear",
    name: "password",
    placeholder: "Create Password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("input", {
    className: "the-block-inp--large clear",
    name: "password",
    placeholder: "Re-type Password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx("button", {
    id: "next1-btn",
    className: "the-block-btn--large clear",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Next"), __jsx("button", {
    id: "cancel1-btn",
    className: "the-block-btn--large clear",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Cancel"));
};

var SignUp_p2 = function SignUp_p2() {
  return __jsx("div", {
    id: "register2",
    className: "hide-element",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("h1", {
    className: "the-block-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Demographic Info"), __jsx("hr", {
    id: "login-hr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("select", {
    defaultValue: "selectGender",
    name: "gender",
    className: "the-block-slct--large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("option", {
    disabled: true,
    value: "selectGender",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Select Gender..."), __jsx("option", {
    value: "male",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Male"), __jsx("option", {
    value: "female",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Female"), __jsx("option", {
    value: "other",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Other")), __jsx("input", {
    type: "number",
    className: "the-block-inp--large clear",
    name: "age",
    placeholder: "Enter Age...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx(country_state_city__WEBPACK_IMPORTED_MODULE_1__["ICountry"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("button", {
    id: "next2-btn",
    className: "the-block-btn--large clear",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Next"), __jsx("button", {
    id: "cancel2-btn",
    className: "the-block-btn--large clear",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Cancel"));
};

var Panel = function Panel() {
  return __jsx("div", {
    id: "login-panel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(Initial, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx(Login, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx(SignUp_p1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx(SignUp_p2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Panel);

/***/ })

})
//# sourceMappingURL=index.js.3b3b25d17ef8ac5dbfc3.hot-update.js.map