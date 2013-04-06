(function (define) {
    define([], function () {

        var mod  = {};
        mod.puts = function () {
           if ( 'undefined' !== typeof console
             && 'function'  === typeof console.log ) {
               console.log.apply(arguments);
           }
        };

        return mod;
    });
})(
// AMD - RequireJS
    'function'  === typeof define    &&
    'function'  === typeof requirejs
  ? define
// node.js
  : 'undefined' !== typeof module &&
    module.exports &&
    'function'  === typeof require
  ? function (dep, fact) { module.exports.mod = fact(); }
// this === window
  : function (dep, fact) { this['mod'] = fact(); }
);
