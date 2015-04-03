var should = require("should");
var audit = require("./audit_model");

describe('audit model tests', function(){

    it('will create audit records', function(done){

        var before = audit.db.length;
        audit.create({}, function (err) {
            should.not.exist(err);
            (audit.db.length).should.equal(before + 1);
            done();
        });
    });
});
