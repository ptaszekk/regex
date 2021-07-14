const input = document.querySelector('#input')

let regexFunc = /function?\s+\(\s+([a-zA-Z]*)\s+\)\s+/g;
//finding function and its name
let regex = /function\s+[a-zA-Z]*/g;
let regexArrow = /|\(\)\(=>\)\s+?/

let variableArray = []

const regexKeywords = (function () {
    const keyWords = ["await", "break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "enum", "export", "extends", "false", "finally", "for", "function", "if", "implements", "import", "in", "instanceof", "interface", "let", "new", "null", "package", "private", "protected", "public", "return", "static", "super", "switch", "this", "throw", "true", "try", "typeof", "var", "void", "while", "with", "yield"]
    const regex = `${keyWords.map(keyword => `\\b${keyword}\\b|`)}`.replaceAll(',', '')
    let i = regex.lastIndexOf('|');
    return regex.substr(0, i) + '' + regex.substr(i + 1, regex.length);
})();

function keywordCounter(str) {
    let regex = new RegExp(regexKeywords, 'g');
    (typeof str === "string" && regex.test(str)) ? variableArray = str.match(regex) : null;
    const result = [{count: 1, keyword: variableArray[0]}]
    variableArray.slice(1).forEach((keyword, index) => {
        if (keyword !== variableArray[index]) {
            result.push({count: 1, keyword: keyword})
        } else {
            result[result.length - 1].count++;
        }
    });
    console.log(result)
    return result
}

keywordCounter()

