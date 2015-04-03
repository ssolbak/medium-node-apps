var audit = require("./audit_model"),
    log = require("~/common/logger"),
    constants = require("~/common/constants");

exports.init = function(bus){

    // better to have a seperate file for event handlers

    bus.on(constants.events.createPlayer, function(player){

        audit.create({type: constants.events.createPlayer, payload: player}, function(err){
            if(err) log.error(err);
        });

    });

};
