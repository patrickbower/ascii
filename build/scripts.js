'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _something = require('./something');

var _something2 = _interopRequireDefault(_something);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Test = function () {
  function Test() {
    _classCallCheck(this, Test);

    this.text = 'hello world';
    this.newText = this.textFunction();
  }

  _createClass(Test, [{
    key: 'textFunction',
    value: function textFunction() {
      return (0, _something2.default)(this.text.length);
    }
  }]);

  return Test;
}();

var test = new Test();
console.log(test);