var should = require("should");
var event_handlers = require("./event_handlers");
var constants = require("~/common/constants");

describe('audit event handler tests', function() {

    it('will audit player create', function (done) {

        var bus = require("~/common/bus");
        var audit = require("./audit_model");

        event_handlers.init(bus);

        var before = audit.db.length;
        bus.emit(constants.events.createPlayer, {name: "adsadsfdfs"});

        setImmediate(function(){
            (audit.db.length).should.equal(before+1);
            done();
        });
    });
});