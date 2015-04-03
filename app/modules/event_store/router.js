var router = require("express").Router();

function EventStoreRouter(bus, event_handlers){

    (event_handlers || require('./event_handlers')).init(bus);

    // not routes required
    this.router = router;
}

module.exports = function(bus) {
    return new EventStoreRouter(bus);
};
