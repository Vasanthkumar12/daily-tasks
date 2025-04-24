let T = [73, 74, 75, 71, 69, 72, 76, 73]
let arr = new Array(T.length).fill(0)


// for(let i=0; i<T.length; i++) {
//     let c = 0, flag = false
//     for(let j=i+1; j<T.length; j++) {
//         if(T[i] < T[j]) {
//             flag = true
//             break
//         }
//         else {
//             c++
//         }
//     }
//     arr[i] = flag? c+1 : 0
// }
// console.log(arr)


// Reduce TC from O(n^2) to O(n) using Stack

let stk = []
for(let i=0; i<T.length; i++) {
    while(stk.length && T[i] > T[stk[stk.length-1]]) {
        let pre = stk.pop()
        arr[pre] = i - pre
    }
    stk.push(i)
}
console.log(arr)