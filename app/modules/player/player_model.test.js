var should = require("should");
var player = require("./player_model");

describe('player model tests', function(){

    it('will find all players', function(done){
        player.findAll(function(err, players){
            should.not.exist(err);
            (players.length).should.equal(4);
            done();
        });
    });

    it('will find matching players', function(done){
        player.find({position:'d'}, function(err, players){
            should.not.exist(err);
            (players.length).should.equal(1);
            done();
        });
    });

    it('will create players', function(done){

        //code smell alert!
        player.findAll(function(err, players) {
            var before = players.length;
            player.create({}, function (err) {
                should.not.exist(err);
                player.findAll(function (err, players) {
                    (players.length).should.equal(before + 1);
                    done();
                });
            });
        });
    });
});
