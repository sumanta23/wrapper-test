module.exports = {
    "testdata" : {
        "id" : "testdata",
        "type": "object",
        "additionalProperties": false,
        "properties": {
            "phoneNo": {
                "type": 'string',
                "minLength": 10,
                "maxLength": 13
            },
            "dualLogin":{
                "type": 'boolean'
            }
        },
        "required": ['phoneNo']
    }
}