var BaseModel = require('mongodbconnection-wrapper').getBaseModel();

class VotingModel extends BaseModel {

    constructor(dbMgr, options){
        super(dbMgr, options);
        this.idName = "v"
        this.modelName = 'votings';
    }

}

module.exports = VotingModel;