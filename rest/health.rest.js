var paramType          = require("@sumanta23/server-wrapper").paramTypes;
var serviceHandler     = require("@sumanta23/server-wrapper").serviceHandler;

var Promise            = require('bluebird');
var _                  = require('lodash');

module.exports.getHealth = function(req, res) {
    var healthP = Promise.resolve({'status':'OK'})
	serviceHandler(req, res, healthP);
};

module.exports.url_prefix = "/api" ;
module.exports.getMappings = function() {
    return {
        '/health' : {
            get : {
                tags: ["Health"],
                summary: "Get health",
                callbacks : [this.getHealth],
            },
            post : {
                tags: ["Health"],
                summary: "Get health",
                callbacks : [this.getHealth],
                parameters: [
                    paramType.header("authorization","access token","string",true),
                    paramType.body("body","payload","testdata",true)
                ]
            },
            '/:server' : {
                get: {
                    tags: ["Health"],
                    summary: "Get health by server name",
                    callbacks : [this.getHealth],
                    parameters: [
                        paramType.query("q", "status in OK", "enum", false, ["OK"]),
                        paramType.path("server", "server Type", "enum", true, ["api","ws","job","schedular"])
                    ]
                }
            }
        }
    }

};