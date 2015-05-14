module.exports = create

var GLMAT_ARRAY_TYPE = require('./common').GLMAT_ARRAY_TYPE();

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */
function create() {
    var out = new GLMAT_ARRAY_TYPE(2)
    out[0] = 0
    out[1] = 0
    return out
}