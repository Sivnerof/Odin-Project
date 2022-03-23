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

// Do not edit below this line
module.exports = removeFromArray;
