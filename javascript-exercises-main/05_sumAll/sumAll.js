const sumAll = function(num1, num2) {
    let number1, number2;
    if (num1 < 0 || num2 < 0 || typeof num1 !== "number" || typeof num2 !== "number"){
        return 'ERROR';
    } else if (num1 < num2){
        number1 = num1;
        number2 = num2;
    } else {
        number1 = num2;
        number2 = num1;
    } 

    let sum = 0;
    for (let i = number1; i <= number2; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
