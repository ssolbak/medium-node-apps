var router = require("express").Router(),
    player = require("./player_model"),
    log = require("~/common/logger"),
    constants = require("~/common/constants");

function PlayerRouter(bus){

    function createPlayer(req, res) {
        player.create(req.body, function (err, player) {
            if (err) {
                log.error(err);
                return res.status(500).send('oops');
            }
            bus.emit(constants.events.createPlayer, player);
            res.status(201).send();
        });
    }

    function getPlayers(req, res){
        player.findAll(function(err, players){
            if(err) return log.error(err);
            res.json(players);
        });
    }

    function getDefence(req, res){
        player.find({pos:'d'}, function(err, players){
            if(err) return log.error(err);
            res.json(players);
        });
    }

    router.post("/players", createPlayer);
    router.get("/players", getPlayers);
    //router.get("/players/forwards", getForwards);
    router.get("/players/defence", getDefence);
    //router.get("/players/goalies", getGoalies);

    this.router = router;
}

module.exports = function(bus) {
    return new PlayerRouter(bus);
};