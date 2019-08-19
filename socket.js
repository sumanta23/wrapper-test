var _         = require("lodash");
var debug     = require("debug")("wsserver");
var boot = require("boot-wrapper");
var config = require("config-wrapper");
var redisconnection = require("redisconnection-wrapper")(config.get("redis"));
var subchannel = require("redisconnection-wrapper")(config.get("redis"));

var wsconfig = config.get("ws");

var express = require("express");
var http = require("http");
var app = express();
var server = http.createServer(app);

var port = process.env.PORT || wsconfig.port;

boot.init(config)
  .then(async () => {
    await boot.bootredis(redisconnection);
    var senderM = require("@sumanta23/server-wrapper").sender;
    await boot.bootsender(senderM);
    //await boot.enableHealthMonitoring("ws");
  }).then(async () => {
    var ws = require("@sumanta23/server-wrapper").wsserver;
    ws.listen(server, wsconfig, ()=>{}, redisconnection, subchannel, ()=>{});
    server.listen(port, function () {
      debug("server started on localhost:" + port);
    });
  })
