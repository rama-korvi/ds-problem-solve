// Write a function that searches for an element in an array and returns the index,
//  if the element is not present then return -1.

let arr = [42, 2, 0, -10, 8, 30]; 

function getIndexOfMatchingElement(arr, search_element){
    for(let x=0; x < arr.length; x++){  
        if(arr[x] == search_element){
            return x
        }
    }
    return -1;
}


console.log(getIndexOfMatchingElement(arr,30));
console.log(getIndexOfMatchingElement(arr,20));
console.log(getIndexOfMatchingElement(arr,3));
console.log(getIndexOfMatchingElement(arr,8));


// write a function that returns the number of negatvie numbers in an array.

function findNegativeNumbers(arr){
    let count = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            count++;
        }
    }
    return count;
}

console.log(`Number of Negative numbers in the array are ${findNegativeNumbers(arr)}`);

// write a function that returns the largest number in an array

function findLargest(arr){
    let largest = arr[0];
    for(let i = 1; i < arr.length; i++){
        largest = (arr[i] > largest) ? arr[i] : largest; 
    }
    return largest;
}

console.log(`Largest number from the array is ${findLargest([-9,-19,-3])}`);

// write a function to find the second largest number from an array

function secondLargest(arr){
    let firstLarge = arr[0];
    let secondLarge = arr[1];
    
    if(firstLarge < secondLarge){
        let temp = secondLarge;
        secondLarge = firstLarge;
        firstLarge = temp;
    }

    for(let i=2;i<arr.length;i++){
        if(arr[i]>firstLarge){
            secondLarge = firstLarge;
            firstLarge = arr[i];
        } else if(arr[i]>secondLarge){
            secondLarge = arr[i];
        }
    }
    return secondLarge;
}

console.log(secondLargest([9, 1, 30, 42, -1, 12, 33]));