const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    let arraySplitExpr = expr.match(/.{1,10}/g);

    let decodeSplitExpr = [];
    for (i = 0; i < arraySplitExpr.length; i++) {
        decodeSplitExpr.push(arraySplitExpr[i].replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-'));
    }

    let decodeArrayOneMoreTime = [];
    for (i = 0; i < decodeSplitExpr.length; i++) {
        if (decodeSplitExpr[i] == '**********') {
            decodeArrayOneMoreTime.push(decodeSplitExpr[i] = ' ');
        } else {
            for (let key in MORSE_TABLE) {
                if (decodeSplitExpr[i] === key) {
                    decodeArrayOneMoreTime.push(MORSE_TABLE[key]);
                }
            }
        }
    }
   
return decodeArrayOneMoreTime.join('');
}

module.exports = {
    decode
}