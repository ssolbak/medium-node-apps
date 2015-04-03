var _ = require('lodash'),
    constants = require('~/common/constants');

var _players = [
    {id: 1, name: "Taylor Hall", team: 'edm', position : constants.position.left_wing},
    {id: 2, name: "Ryan Nugent-Hopkins", team: 'edm', position : constants.position.center},
    {id: 2, name: "Oscar Klefbom", team: 'edm', position : constants.position.defence},
    {id: 2, name: "Ben Scrivens", team: 'edm', position : constants.position.goalie}
];

exports.create = function(player, cb) {
    setImmediate(function () {
        _players.push(player);
        cb(null, player);
    });
};

exports.findAll = function(cb) {
    setImmediate(function () {
        cb(null, _players);
    });
};

exports.find = function(criteria, cb){
    setImmediate(function () {
        cb(null, _.filter(_players, criteria));
    });
};
