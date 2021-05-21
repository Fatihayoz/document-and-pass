/**
 *
 */
const repeatString = (str = '', number = 0) => {
    if (number >= 0) {
        return str.repeat(number);
    } else {
        return 'ERROR';
    }
}

/*
const repeatString = (str = '', number = 0) => {
    let result = '';
    while (number > 0) {
        result += str;
        number--; 
    } return result;
}
*/


module.exports = repeatString
