const palindromes = function (s) {
    let mainString = mainstr(s);
    reverseString = mainString.split('').reverse().join('');
    return mainString === reverseString;
};

function isChar(char){
    return (/[a-zA-Z]/).test(char);
}

function mainstr(st){
    let an = 'abcdefghijklmnopqrstuvwxyz0123456789';
    st = st.toLowerCase();
    let m = '';
    for(i of st){
        if(an.includes(i)) m+=i;
    }
    return m;
}

// Do not edit below this line
module.exports = palindromes;
