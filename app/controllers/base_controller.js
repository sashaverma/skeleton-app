var async = require('async');
var _ = require("underscore");

exports.hello_world = function(req, resp) {
  resp.json( {str: "hello world"} );
};