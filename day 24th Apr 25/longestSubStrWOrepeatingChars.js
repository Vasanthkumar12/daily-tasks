let s = 'pwwkew'
let i = 0; j = 0, tmp = '', max = 0
let fg = s.slice(0, 2)
console.log(fg, s)
while(j < s.length) {
    console.log(j, s[j])
    if(!tmp.includes(s[j])) {
        tmp += s[j]
        console.log("tmp ==", tmp)
        max = Math.max(max, tmp.length)
        j++
    }
    else {
        let firstIndex = tmp.indexOf(s[j])
        tmp = tmp.slice(firstIndex + 1)
        tmp += s[j]
        console.log('tmporary =', tmp, i)
        i++
        j++
    }
}
console.log(max)