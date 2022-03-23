const leapYears = function(year) {
    let leap;
    if (year % 4 == 0 && (year % 400 == 0 || year % 100 != 0)){
        return leap = true;
    } else {
        return leap = false;
    }
};

// Do not edit below this line
module.exports = leapYears;
