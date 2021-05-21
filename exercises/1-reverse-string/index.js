/**
 *
 */
const reverseString = (str) => {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    } return reversed;
}

/*
const reverseString = (str) => {
    let splitted = str.split('');
    let reversed = splitted.reverse();
    let joined = reversed.join('');
    return joined;
}

const reverseString = (str) => {
    return str.split('').reverse().join('');
}

*/

module.exports = reverseString
