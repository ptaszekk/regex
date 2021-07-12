//regexx expression to find functions

let regexFunc = /function?\s+\(\s+([a-zA-Z]*)\s+\)\s+/g;
//finding function and itts hame
let regex = /function\s+[a-zA-Z]*/g;
let regexArrow = /|\(\)\(=>\)\s+?/

let str = 'function afsaf function fajhHDHJDdss function FSJKFJfkjs      ';

function findFunction(str){
    console.log( str.match(regex))
}

function count (str) {
    console.log(str.match(regex).length)
    return str.match(regex).length
}

count(str)
findFunction(str);

