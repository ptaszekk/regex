//regexx expression to find functions

let regexFunc = /function?\s+\(\s+([a-zA-Z]*)\s+\)\s+/g;
//finding function and itts hame
let regex = /function\s+[a-zA-Z]*/g;
let regexArrow = /|\(\)\(=>\)\s+?/


const regexKeyword = (function() {
    const keyWords = ["await", "break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "enum", "export", "extends", "false", "finally", "for", "function", "if", "implements", "import", "in", "instanceof", "interface", "let", "new", "null", "package", "private", "protected", "public", "return", "static", "super", "switch", "this", "throw", "true", "try", "typeof", "var", "void", "while", "with", "yield"]
    let regex = ''
    keyWords.forEach(word => regex = `${regex + word}|`)
    return `/${regex}/g`;
})()
console.log(regexKeyword)
let str = 'function afsaf function fajhHDHJDdss function FSJKFJfkjs      ';

function findFunction(str) {
    console.log(str.match(regex))
}

function count(str) {
    console.log(str.match(regex).length)
    return str.match(regex).length
}

count(str)
findFunction(str);

function whatever() {
}