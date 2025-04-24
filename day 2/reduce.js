let nums = [1, 2, 3]

nums = nums.reduce((acc, num)=> {
    acc.push(num * num)
    return acc
}, [])

console.log(nums)

let sum = nums.reduce((acc, num) => acc + num)
console.log(sum)

let arr = [1, 2, [3, 4], [[5, [7, 5],6]]]

// console.log(arr.flat(10))
function deepFlat(arr) {
    return arr.reduce((acc, curr) => {
        return acc.concat(Array.isArray(curr) ? deepFlat(curr) : curr)
    }, [])
}
// let res = arr.reduce((acc, num) => {
//     return acc.concat(acc.isArray(num) ? )
    
// }, [])

console.log(deepFlat(arr))


function depth(arr) {
    let re = []
    for(let i=0; i<arr.length; i++) {
        if(Array.isArray(arr[i])) {
            let arr2 = depth(arr[i])
            re = re.concat(arr2)
        }
        else {
            re.push(arr[i])
        }
    }
    return re
}

console.log(depth(arr))