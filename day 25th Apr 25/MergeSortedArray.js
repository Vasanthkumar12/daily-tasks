var merge = function(nums1, m, nums2, n) {
    let i = 0, j = 0, a = [], k = 0
    while(i < m && j < n) {
        if(nums1[i] == 0 && i > m) {
            i++
            continue
        }
        if(nums2[j] == 0 && j > n) {
            j++
            continue
        }
        if(nums1[i] < nums2[j]) {
            a[k++] = nums1[i++]
        }
        else {
            a[k++] = nums2[j++]
        }
    }
    while(i < m) {
        a[k++] = nums1[i++]
    }
    
    while(j < n) {
        a[k++] = nums2[j++]
    }
   for (let x = 0; x < m + n; x++) {
        nums1[x] = a[x];
    }
   
    return nums1
};

let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// let nums1 = [0], m = 0, nums2 = [1], n = 1
// let nums1 = [1], m = 1, nums2 = [], n = 0
console.log(merge(nums1, m, nums2, n))

// Leetcode Link => https://leetcode.com/problems/merge-sorted-array/

// Interview Based
let a1 = [1, 2, 3, 4]
let a2 = [...a1]
a1[0] = 0
console.log(a1, a2)