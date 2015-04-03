function InMemoryCache(params) {
    params = params || {};

    this.data = [];
    this.timeout = params.timeout; // in seconds
}

InMemoryCache.prototype.get = function(key, cb) {
    var val = this.data[key] || null;
    if(cb){
        cb(null, val);
    }
    return this.data[key] || null;
};

InMemoryCache.prototype.set = function(key, val, cb) {
    this.data[key] = val;
    if(cb){
        cb();
    }
    if(this.timeout){
        var self = this;
        setTimeout(function(){
            delete self.data[key];
        }, this.timeout*1000);
    }
};

module.exports = InMemoryCache;
