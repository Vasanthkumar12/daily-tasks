function frequencyOfCharacters(str) {
    let obj = {}

    for(let i=0; i<str.length; i++) {
        if(obj[str[i]]) {
            obj[str[i]] ++
        }
        else {
            obj[str[i]] = 1
        }
    }
    let arr = Object.keys(obj).sort()

    let newStr = ''
    for(let key of arr) {
        newStr += key + obj[key] + " "
    }
    console.log(newStr)
}

let str = "vasanthkumar"
frequencyOfCharacters(str)