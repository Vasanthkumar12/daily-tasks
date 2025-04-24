let s = [2, 1, 5, 6, 2, 3]
let max = 0
for(let i=0; i<s.length; i++) {
    let left = i, right = i
    // find the left length
    while(left > 0 && s[left-1] >= s[i]) {
        left --
    }
    // find the right length
    while(right < s.length-1 && s[right+1] >= s[i]) {
        right ++
    }
    let area = (right - left + 1) * s[i]
    max = Math.max(max, area)
}
console.log(max)