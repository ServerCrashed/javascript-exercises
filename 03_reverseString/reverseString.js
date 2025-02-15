const reverseString = function(text) {
    string = "";
    a = text.split("");
    for(let i=0; i<text.length; i++) string+=a.pop();
    return string;
};

// Do not edit below this line
module.exports = reverseString;
