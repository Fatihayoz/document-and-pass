/**
 *
 */
const palindromes = (str) => {
    var re = /[\W_]/g;
    var lowerStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowerStr.split('').reverse().join(''); 
    return reverseStr === lowerStr;
};


/*
function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    } return true;
}
*/

module.exports = palindromes;
