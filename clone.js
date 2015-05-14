module.exports = clone

var GLMAT_ARRAY_TYPE = require('./common').GLMAT_ARRAY_TYPE();

/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */
function clone(a) {
    var out = new GLMAT_ARRAY_TYPE(2)
    out[0] = a[0]
    out[1] = a[1]
    return out
}