function countDigit(n){
    let sum = 0;
    let count = 0;
    if(n==0){
        count =1
    }
    while(n>0){
    sum = sum + n%10
    n = parseInt(n/10);
    count++;
    }
    console.log(sum);
    console.log(count);
    
}

countDigit(0)

function reverseTheNum(n){
    let rev = 0;
    while(n>0){
        console.log(n % 10);
    rev = (rev*10) + n % 10;
    n = parseInt(n/10);
    }
    return rev;
    
}

console.log(reverseTheNum(121)===121);