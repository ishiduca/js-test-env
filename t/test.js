// AMD
if (
     "function"  === typeof define
  && "undefined" !== typeof requirejs
) {

    requirejs.config({
        baseUrl: '../public/js/'
    });
    require([ 'mod' ], function (mod) {
        QUnit.start();
        BASIC_TEST(mod, {QUnit: QUnit});
    });
}
// node.js
else if (
     "undefined" !== typeof module
  && module.exports
  && "function"  === typeof require
) {

    (function () {
        var path  = require('path');
        var QUnit = require(path.join( __dirname, './qunit/helper')).QUnit;
        var mod   = require(
                      path.join( __dirname, '../public/js/', 'mod')).mod;
        BASIC_TEST(mod, {QUnit: QUnit});
    })();
}
// not AMD && Browser
else if (this === window) {
    $(document).ready(function () {
        BASIC_TEST(mod, {QUnit: QUnit});
    });
}


function BASIC_TEST (mod, opt) {
    var is = opt.QUnit.strictEqual;

    opt.QUnit.module("module test");
    test('exists mod', function () {
        ok(mod, 'exists mod');
        ok(mod.puts, 'exists mod.puts');
        is(typeof mod.puts, 'function', '"function" === typeof mod.puts');
    });
}
