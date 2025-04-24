Array.prototype.lastIndex = function () {
    return this.length - 1
}

let nums = [1, 2, 3, 4, 5]
console.log(nums.lastIndex())


Array.prototype.midEle = function () {
    return this[Math.floor(this.length / 2)]

}

console.log(nums.midEle())