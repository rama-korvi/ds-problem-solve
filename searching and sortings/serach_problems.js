// linear search

function linearSearch(arr, n) {
    if (arr.length === 0) return -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([12, 23, 45, 15, 67], 67))

// Worst time complexity is O(n)
// Best Time complexity is O(1)
// Space complexity is O(1)

//Binary search 
function binarySearch(arr, searchNum) {
    if (arr.length < 0) return -1;
    arr.sort(); // 12 15 23 45 67 
    let l = 0; // 0 // 3
    let r = arr.length - 1; // 4
    while (l <= r) { // 0 < 4 ||  3 < 4 
        let mid = Math.floor((l + r) / 2);// 2 // 3
        if (arr[mid] > searchNum) {  //23 > 45
            r = mid - 1; 
        } else if (arr[mid] < searchNum) {
            l = mid + 1; // 3
        } else {
            return mid; // 3
        }
    }
    return -1;
}

console.log(binarySearch([12, 23, 45, 15, 67], 45))

// Time complexity is nlogn for sorting and 
/**
 * n,n/2,n/4,n/8,n/16 = 
 */

function firstOccurrence(arr, target) {
    let l = 0;
    let r = arr.length - 1;
    let ans = -1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (arr[mid] === target) {
            ans = mid;        // possible answer
            r = mid - 1;      // move left
        } else if (arr[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return ans;
}


function lastOccurrence(arr, target) {
    let l = 0;
    let r = arr.length - 1;
    let ans = -1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (arr[mid] === target) {
            ans = mid;        // possible answer
            l = mid + 1;      // move right
        } else if (arr[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return ans;
}

function countOccurrences(arr, target) {
    const first = firstOccurrence(arr, target);
    console.log(`first occurence is ${first}`);
    if (first === -1) return 0;

    const last = lastOccurrence(arr, target);
    console.log(`last occurence is ${last}`);
    return last - first + 1;
}


arr = [1, 2, 2, 2, 3, 4, 5]
target = 2

console.log(countOccurrences(arr, target)); 
