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
/*
Write a function that simply repeats the string a given number of times:

```javascript
repeatString('hey', 3) // returns 'heyheyhey'
```

This function will take two arguments, `string` and `num`.

- Take note of the above function call- how exactly is it being called?

- You're going to want to use a loop for this one.

- Create a variable to hold the string you're going to return, create a loop that repeats the given number of times and add the given string to the result on each loop.
*/
// Do not edit below this line
module.exports = repeatString;
