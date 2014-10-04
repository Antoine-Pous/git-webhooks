/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <gecko@dvp.io> wrote this file. As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return Antoine Pous
 * ----------------------------------------------------------------------------
 */
var Http = require("http");
var EventEmitter2 = require( "eventemitter2" ).EventEmitter2;
var Util = require("util");
var QueryString = require("querystring");

module.exports.onPort = function (port) {
  var Events = new EventEmitter2({
    delimter: ':',
    maxListeners: 0
  });
  var HttpServer = Http.createServer( function( req, res ) {
    var data = "";
    if (req.method === "POST") {
      req.on("data", function(chunk) {
        data += chunk;
      });
    }
    req.on("end", function() {
      var payload = JSON.parse(QueryString.unescape(data));
      Events.emit(req.headers['x-github-event'],payload);
      res.writeHead( 200, {
        'Content-type': 'text/html'
      });
      res.end();
    });
  }).listen(port);
  return Events;
}
