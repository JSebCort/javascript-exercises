const palindromes = function (a) {
    let b = a.toLowerCase().replace(/[^a-z]/gi,"");
    return b.split('').reverse().join('') == b;
};

// Do not edit below this line
module.exports = palindromes;
