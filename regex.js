//regex expression to find functions

let regexFunc = /function?\s+\(\s+([a-zA-Z]*)\s+\)\s+/g;
//finding function and its name
let regex = /function\s+[a-zA-Z]*/g;
let regexArrow = /|\(\)\(=>\)\s+?/


const regexKeyword = (function () {
    const keyWords = ["await", "break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "enum", "export", "extends", "false", "finally", "for", "function", "if", "implements", "import", "in", "instanceof", "interface", "let", "new", "null", "package", "private", "protected", "public", "return", "static", "super", "switch", "this", "throw", "true", "try", "typeof", "var", "void", "while", "with", "yield"]
    let regex = ''
    keyWords.forEach(word => regex = `${regex + word}|`)
    return `/${regex}/g`;
})()

function regexChecker(str, regex) {
    const test = regex.test(str)
    if (test)
        return str.match(regex)
    else
        return 'sorry no match'
}

function count(str) {
    console.log(str.match(regex).length)
    return str.match(regex).length
}

// function variablesCounter(str) {
//     const regex = /(var)|(let)|(const)/g
//     let letCounter = 0,
//         varCounter = 0,
//         constCounter = 0;
//     let variableArray = [];
//     (typeof str === "string" && regex.test(str)) ? variableArray = str.match(regex) : null;
//     variableArray.map(variable => {
//         const v = /var/g;
//         const l = /let/g;
//         const c = /const/g;
//         console.log(variable);
//         (v.test(variable)) ? varCounter++ : null;
//         (l.test(variable)) ? letCounter++ : null;
//         (c.test(variable)) ? constCounter++ : null;
//     })
//     console.log(variableArray.length, variableArray)
//     console.log(`let count = ${letCounter}, var count = ${varCounter}, const count =  ${constCounter}`)
//
// }

function keywordRegex() {
    const keyWords = ["await", "break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "enum", "export", "extends", "false", "finally", "for", "function", "if", "implements", "import", "in", "instanceof", "interface", "let", "new", "null", "package", "private", "protected", "public", "return", "static", "super", "switch", "this", "throw", "true", "try", "typeof", "var", "void", "while", "with", "yield"]
    const regex = `${keyWords.map(keyword => `\\b${keyword}\\b|`)}`.replaceAll(',', '')
    let i = regex.lastIndexOf('|');
    return regex.substr(0, i) + '' + regex.substr(i + 1, regex.length);
}

function keywordCounter(str) {
    let regex = new RegExp(keywordRegex(), 'g');
    console.log(regex.test(str));
    let variableArray = [];
    (typeof str === "string" && regex.test(str)) ? variableArray = str.match(regex) : null;
    console.log(variableArray)

}

keywordCounter('var var vavar, functionfunction  function 123 function1 string in inni ininininin in')
// count(str)
// findFunction(str);
