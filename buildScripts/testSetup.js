// this file isn't transpiled, so must see CommonJS and ES5

// Register babel to transpile before the tests run
require("babel-register")();

// Disable webpack features that Mocha can't understand
require.extensions[".css"] = function () {};
