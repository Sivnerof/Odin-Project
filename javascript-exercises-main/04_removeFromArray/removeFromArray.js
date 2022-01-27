const removeFromArray = function(array, ...elements) {
    const elementsToSearch = [...elements];
    for (let i = 0; i < elementsToSearch.length; i++){
        for (let j = 0; j < array.length; j++){
            if(elementsToSearch[i] === array[j]){
                array.splice(j, 1);
                j--;
            }
        }
    }
    return array;
};

/*
for (const cat of cats) {
  console.log(cat);
}

- how to remove a single element from an array
- how to deal with multiple optional arguments in a javascript function
- (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments).  
- Scroll down to the bit about `Array.from` or the spread operator. 
- [Or this link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
*/

// Do not edit below this line
module.exports = removeFromArray;
