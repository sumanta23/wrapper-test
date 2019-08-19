'use strict';


function loadSchema(Schema,db){

    var voting = {
        "_id":{
            type:String,
            trim:true
        },
        "callId" : {
            type:String,
            trim:true,
            required: true
        },
        "option": {
            "type": String,
            "required": true
        },
        "userId" :{
            "type": String,
            "required": true
        },
        "cOn" : {
            type : Date,
            default: Date.now
        },
        "mOn" : {
            type : Date,
            default: Date.now
        }
    };

    db.model('votings', new Schema(voting), 'votings');
}
module.exports = loadSchema;
