const lineSeperator = `•·················•·················•`

function removeBlanks(str) {
    var newString = ""
    for(var n=0;n<str.length;n++) {
        if(str[n] != " ") {
            newString += str[n]
        }
    }
    return newString
}

function getDigits(str) {
    var newString = ""
    for(var n=0;n<str.length;n++) {
        if(isNaN(str[n]) === false) {
            newString += str[n]
        }
    }
    return Number(newString)
}

function acronyms(str) {
    newString = ""
    x = str.split(' ')
    for(n=0;n<x.length;n++) {
        if(x[n][0]) {
            newString += x[n][0]
        }
    }
    return newString.toUpperCase()
}

function countNonSpaces(str) {
    count = 0
    for(n=0;n<str.length;n++) {
        if(str[n] != " ") {
            count++
        }
    }
    return count
}

function removeShorterStrings(str, size) {
    count = 0
    while(count<str.length) {
        if(str[count].length <= size) {
            removeAt(str, count)
        } else {
            count++
        }
    }
    return str
}

function removeAt(arr, index) {
    for(var n=index;n<arr.length;n++) {
        arr[n] = arr[n+1]
    }
    arr.length = arr.length - 1
}

console.log(lineSeperator + ' Remove Blanks ' + lineSeperator + '\n')
var str = " Pl ayTha tF u nkyM usi c "
console.log(str)
console.log('removeBlanks:')
console.log(removeBlanks(str))
console.log('\n')
str = "I can not BELIEVE it's not BUTTER"
console.log(str)
console.log('removeBlanks:')
console.log(removeBlanks(str))
console.log('\n\n')

console.log(lineSeperator + ' Get Digits ' + lineSeperator + '\n')
str = "abc8c0d1ngd0j0!8"
console.log(str)
console.log('getDigits:')
console.log(getDigits(str))
console.log('\n')
str = "0s1a3y5w7h9a2t4?6!8?0"
console.log(str)
console.log('getDigits:')
console.log(getDigits(str))
console.log('\n\n')

console.log(lineSeperator + ' Acronyms ' + lineSeperator + '\n')
str = " there's no free lunch - gotta pay yer way. "
console.log(str)
console.log('acronyms')
console.log(acronyms(str))
console.log('\n')
str = "Live from New York, it's Saturday Night!"
console.log(str)
console.log('acryonms(str)')
console.log(acronyms(str))
console.log('\n\n')

console.log(lineSeperator + ' Count Non-Spaces ' + lineSeperator + '\n')
str = "Honey pie, you are driving me crazy"
console.log(str)
console.log('countNonSpaces(str)')
console.log(countNonSpaces(str))
console.log('\n')
str = "Hello world !"
console.log(str)
console.log('countNonSpaces(str)')
console.log(countNonSpaces(str))
console.log('\n\n')

console.log(lineSeperator + ' Remove Shorter Strings ' + lineSeperator + '\n')
str = ['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello']
console.log(str)
console.log('removeShorterStrings(str, 4)')
console.log(removeShorterStrings(str, 4))
console.log('\n')
str = ['There', 'is', 'a', 'bug', 'in', 'the', 'system']
console.log(str)
console.log('removeShorterStrings(str, 3)')
console.log(removeShorterStrings(str, 3))
console.log('\n\n')