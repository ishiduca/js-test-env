var mod = {};
mod.puts = function () {
    if ( "undefined" !== typeof console
      && "function" === typeof console.log) {
        console.log.apply(arguments);
    }
};


// AMD
if (
     "function"  === typeof define
  && "undefined" !== typeof requirejs
) {

    define(function () {
        return mod;
    });
}
// node.js
else if (
     "undefined" !== typeof module
  && module.exports
  && "function"  === typeof require
) {


    module.exports.mod = mod;
}
//
else if (this === window) {
    ;
}
