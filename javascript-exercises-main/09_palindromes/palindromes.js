const palindromes = function (string) {
    const regex = /[^A-Za-z]/g;
    const new_str = string.split(' ').join('').replace(regex, "").toUpperCase();
    const reversed_string = new_str.split('').reverse().join("");
    
    if (new_str !== reversed_string){
        return false;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
