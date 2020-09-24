"use strict";
var objectSorter = require("./objectSorter");
var js_sha256_1 = require("js-sha256");
/**
 * Hasher constructor
 * @param options hasher options
 */
function hasher() {
    var sortObject = objectSorter();
    function hashObject(obj) {
        var sorted = sortObject(obj);
        return js_sha256_1.sha256.hex(sorted);
    }
    return {
        hash: hashObject,
        sort: sortObject,
        sortObject: sortObject,
    };
}
module.exports = hasher;
//# sourceMappingURL=hasher.js.map