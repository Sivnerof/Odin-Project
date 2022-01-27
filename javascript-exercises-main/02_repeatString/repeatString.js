const repeatString = function(string, number) {
    if(0 > number){
        return "ERROR";
    }
    let appendedString = "";
    for (let i = 0; i < number; i++){
        appendedString += string;
    }
    return appendedString;
};
// Do not edit below this line
module.exports = repeatString;
