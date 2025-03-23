const getTheTitles = function(obj) {
    arr = [];
    obj.forEach(prop => {
        arr.push(prop.title);
    });
    return arr;
};

// Do not edit below this line
module.exports = getTheTitles;
