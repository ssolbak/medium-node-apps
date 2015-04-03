var _ = require('lodash');
var constants = require('~/common/constants');

var _audit = [];

exports.create = function(player, cb) {
    setImmediate(function () {
        _audit.push(player);
        cb(null);
    });
};

exports.db = _audit;