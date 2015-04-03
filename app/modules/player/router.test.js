var should = require("should");

describe('player router tests', function(){

    it('GET /api/players will return all players', function(done) {

        testApp().get("/api/players")
            .expect(200)
            .expect("Content-Type", "application/json; charset=utf-8")
            .end(function(err, res){
                should.not.exist(err);
                (res.body).should.be.instanceof(Array);
                done();
            });
    });

});

function testApp(){
    var app = require("../../web/processes/bootstrap");
    var request = require("supertest");
    return request(app);
}
