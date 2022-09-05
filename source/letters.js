'use strict';

const isStrConsistsOfOneChar = (str) => {
    let temp = str[0]

    for (let i in str) {
        if (i != 0 && str[i] !== temp) return false;
    }

    return true;
}

const isNextValueInStr = (valueIndex, str) => {
    if (str.lastIndexOf(str[valueIndex]) != valueIndex) {
        return true;
    }

    return false;
}

const saveFirstLetters = (str) => {
    let res = []

    for (let i in str) {
        if (!isNextValueInStr(i, str) && !res.includes(str[i])) {
            res.push(str[i])
        } else if (isNextValueInStr(i, str) && !res.includes(str[i])) {
            res.push(str[i])
        }
    }

    return res.join('')
}

const saveLastLetters = (str) => {
    let res = []

    for (let i in str) {
        if (!isNextValueInStr(i, str)) {
            res.push(str[i])
        }
    }

    console.log(str, res)

    return res.join('')
}

const deleteAllReapeatedSymbolsInStr = (str) => {
    let res = []

    for (let i in str) {
        if (str.lastIndexOf(str[i]) == i && str.indexOf(str[i]) == i) {
            res.push(str[i])
        }
    }

    return res.join('')
}

const letters = (str, flag) => { 
    if (str === '' || isStrConsistsOfOneChar(str.split(''))) return ''

    if (flag === undefined) {
        return deleteAllReapeatedSymbolsInStr(str.split(''))
    }
    
    if (flag) {
        return saveFirstLetters(str.split(''))
    }

    return saveLastLetters(str.split(''));
}

// const lettersArr = str.split(' ')
//     let temp = []

//     for (let i of lettersArr) {
//         if (flag) {
//             temp.push(saveFirstLetters(i.split('')))
//         } else {
//             temp.push(saveLastLetters(i.split('')))
//         }
//     }
//     return temp.join(' ')