// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    hash = {}
    arr = str.split("")
    max = 0
    macChar = ""

    for (let i = 0; i < arr.length; i++) {
        if (hash[arr[i]]) {
            hash[arr[i]]++
        }
        else {hash[arr[i]] = 1}
    }
    let output
    for(let char in hash) {
        if (hash[char] > max){
            max = hash[char]
            macChar = char
        }
    }
    return macChar
}

module.exports = maxChar;
