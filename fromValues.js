module.exports = fromValues

var GLMAT_ARRAY_TYPE = require('./common').GLMAT_ARRAY_TYPE();

/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */
function fromValues(x, y) {
    var out = new GLMAT_ARRAY_TYPE(2)
    out[0] = x
    out[1] = y
    return out
}