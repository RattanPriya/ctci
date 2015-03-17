var LRUCache = function (limit) {
    this.size = 0;
    this.limit = limit;
    this._map = {};
}
LRUCache.prototype.put = function (key, value) {
    //1. empty cache
    //2. full cachce
    //3. size< limit
    var entry = {
        key: key,
        val: value
    },
    currHead = this.head;

    if (this.tail) {
        entry.older = this.tail;
        this.tail.newer = entry;
    } else {
        this.head = entry;
    }
    this.tail = entry;
    this._keymap[key] = entry;
    if (this.size === limite) {
        this.shift();
    }
}
LRUCache.prototype.shift = function () {
    var entry = this.head;
    if (this.head.newer) {
        this.head = entry.newer;
        this.head.older = 'undefined';
    } else {
        this.head = undefined;
        return this.head;
    }

    entry.newer = entry.older = undefined;
    return delete this._keymap[entry.key];

}

LRUCache.prototype.get = function (key) {
    var entry = this._keymap[key];
    if (!entry) return 'undefined';
    if (this.tail) {
        this.tail.newer = entry;
        entry.older = this.tail;
        this.tail = entry;
    }
    return entry;
}
