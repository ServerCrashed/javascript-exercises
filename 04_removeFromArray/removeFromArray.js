const removeFromArray = function(array, ...o) {
    for(let i=0; i<array.length; i++){
        if(o.includes(array[i])) {
            array.splice(i,1);
            i--;
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
