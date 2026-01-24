// Write a code which returns the unique count of numbers. Given arrays has non-decreasing integers. Remove duplicates from the array in-place.
const arr = [0,0,1,1,1,2,2,2,3,3,4,4];

function returnUniqueNumbers(arr){
    let j = 0;
    if(arr.length == 1){
        return 1;
    }
    for(let i = 1; i < arr.length; i++){
       if( arr[i] !== arr[j]){
        j = j+1;
        arr[j] = arr[i];
       }
    }
    console.log(arr)
    return j+1;
}

//console.log(returnUniqueNumbers(arr))

//console.log(returnUniqueNumbers([-5,-4,-4,-3,-2,-1,-1,-1,0,0,0,1,1,2,2,3,3,4,4,5]))

// Given an integer array nums and an integer val, remove all the occurances of val in nums in-place. 
// The order of elements may be changed. then return the number of elements in nums which are not equal to val

function returnCountOfMatchedNumber(arr , val){
    if(arr.length == 0) return 0;
    let j = arr.length-1;
    for(let i=arr.length-1;i>=0;i--){
        if(arr[i]===val){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j--;
        }
    }
    console.log(arr)
    return j+1;
}

//console.log(returnCountOfMatchedNumber(arr,2))


function returnArrayByRemovingTheMatchingValue(arr, val){
    let j = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===val && arr[i]!=arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        } else if(arr[j]!== 2){
            j++
        }
    }
    console.log(arr)
    
}

//console.log(returnArrayByRemovingTheMatchingValue(arr,2))


function reverseString(charArr){
    let i=0;
    let j = charArr.length-1;
    while(i<=j){
        let temp = charArr[i];
        charArr[i] = charArr[j];
        charArr[j] = temp;
        i++;
        j--;
    }
    return charArr;
}

//console.log(reverseString("hello".split('')))


function maxProfit(arr){
   let i=0;
   let maxp = -Infinity;
   for(let j=1;j<=arr.length-1;j++){
    if(arr[i]>arr[j]){
        i=j;
    }else if(arr[i]<arr[j]){
        maxp = Math.max(maxp, (arr[j]-arr[i]));
    }
   }
   return maxp;
}

//console.log(maxProfit([20,1,3,1,30,45]));



// 

function merge2SortedArrays(nums1,m,nums2,n){
    const n1Copy = nums1.slice(0,m);
    console.log(n1Copy)
    let p1 = 0;
    let p2 = 0;
    for(let i=0;i<m+n;i++){
        if(p2>=n || (p1<m && n1Copy[p1]<nums2[p2])){
            nums1[i]= n1Copy[p1];
            p1++;
            console.log('P1 values is '+ p1)
        } else {
            nums1[i] = nums2[p2];
            p2++;
            console.log('P2 values is '+ p2)
        }
    }

    return nums1;
}


// console.log(merge2SortedArrays([1,2,3],3,[2,5,6],3));


function moveZerosToend(nums){
    let i=0;
    for(let j=0;j<=nums.length-1;j++){
        if(nums[j]!=0){
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j]= temp;
            i++;
        }
    }

    return nums;
}

//console.log(moveZerosToend([0,1,0,3,12]))



function findMaxconsones(arr){
    let max = 0;
    let count = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===1){
            count++;
        }else {
            count = 0;
        }
        max = Math.max(count,max);
    }

    return max;
}

console.log(findMaxconsones([1,1,0,1,1,1,2,3,4,1,1,1,1,1,0,1,1]))


function findMissingNum(arr){
   const sum = arr.reduce((sum,index) => {
        sum = sum + index;    
        return sum;
   },0);
   let length = arr.length + 1;
   console.log(length)
   const totalSum = (length * (length +1))/2;
   return totalSum - sum;
}

console.log(findMissingNum([1,2,4]))



function findSingleNum(arr){
    const map = new Map();
    for(let i =0;i<arr.length;i++){
        if(map.has(arr[i])){
            map.set(arr[i],map.get(arr[i])+1);
        } else {
            map.set(arr[i],1);
        }
    }
    map.forEach((value, key)=>{
        if(value == 1){
            console.log("key with single numbers are "+ key);
        }
    })
}

findSingleNum([1,1,2,2,3,6,4,4,5])



function findSingle(arr){
    let XOR = 0;

    for (let i = 0; i < arr.length; i++) {
        XOR = XOR ^ arr[i];
    }

    return XOR;
}

console.log(findSingle([1,1,2,2,3,4,4]));