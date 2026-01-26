// sum of 1 to 10 using recursions

function sumOfnNumbers(n) {
    if (n === 0) return 0;
    return n + sumOfnNumbers(n - 1);
}

console.log(sumOfnNumbers(10));

///sum of all the numbers in an array : [ 10, 20, 30, 40, 50]



function sumAofAllNumbersFromAnArray(arr, n) {
    if (n === 0) return arr[0];
    return arr[n] + sumAofAllNumbersFromAnArray(arr, n - 1);
}

console.log(sumAofAllNumbersFromAnArray([10, 20, 30, 40, 50], 4))


function sum(arr, n) {
    if (n < 0) return 0;

    if (arr[n] % 2 !== 0) {
        return arr[n] + sum(arr, n - 1);
    } else {
        return sum(arr, n - 1);
    }
}

console.log(sum([10, 21, 30, 41, 50], 4))


function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));



// fabinocci series 
// 0 1 2 3 5 8 13 21
// sum of last 2 nums

function fabinocciNum(n) {
    let x = 0;
    let y = 1;
    console.log(x); 
    console.log(y);
    for (let i = 0; i < n; i++) {   
        let z = x + y;
        x = y;
        y = z;
        console.log(z)    
    }
}

//fabinocciNum(5)

function fab(n){
    if(n<0)return 0;
    if(n===0) return 0;
    if(n===1) return 1;
    return fab(n-1)+fab(n-2);
}

console.log(fab(13));