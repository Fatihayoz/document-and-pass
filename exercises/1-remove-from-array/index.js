/**
 *
 */
const removeFromArray = (array, value) => {
    return array.filter (function(x) {
        return x != value;
    }
)};

module.exports = removeFromArray
