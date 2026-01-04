function printStartPatern1(n){
    for(let i=0;i<n;i++){
        let str = "";
        for(let j=0;j<n;j++){
            str = str +"*";
        }
        console.log(str);
    }
}

//printStartPatern1(4)

function pattern2(n){
    for(let i=0;i<n;i++){
        let row = "";
        for(let j=0;j<=i;j++){
            row = row + "*";
        }
        console.log(row);
    }
}

//pattern2(4)

function pattern3(n){
    for(let i=0;i<n;i++){
        let row = "";
        for(let j=0;j<=i;j++){
            row = row + (j+1);
        }
        console.log(row);
    }
}

//pattern3(5)
/**
 * 
1
12
123
1234
12345
 */
function pattern4(n){
    for(let i=0;i<n;i++){
        let row = "";
        for(let j=0;j<=i;j++){
            row = row + (i+1);
        }
        console.log(row);
    }
}

//pattern4(5)

// output
/**
 * 
1
22
333
4444
55555

 */


function pattern5(n){
    for(let i=n;i>0;i--){
        let row = "";
        for(let j=0;j<i;j++){
            row = row + (j+1);
        }
        console.log(row);
    }
}

//pattern5(4)

function pattern6(n){
    for(let i=1;i<=n;i++){
        let row = "";
        for(let j=0;j<n;j++){
            if(j>=n-i){
                row = row + "*";
            } else {
                row = row + " ";
            }
        }
        console.log(row);
    }
}

//pattern6(4)

function pattern7(n){
    for(let i=1;i<=n;i++){
        let row = "";
        for(let j=1;j<=i;j++){
            if(j%2 == 0){
                row = row + "0";
            }else {
                row = row + "1";
            }
        }
        console.log(row)
    }
}

//pattern7(6);

function pattern8(n){
    let toggle = 1;
    for(let i=0;i<n;i++){
        let row = "";
        for(let j=0;j<=i;j++){
            row = row + toggle;
            if(toggle === 1){
                toggle = 0;
            }else{
                toggle = 1;
            }
        }
        console.log(row)
    }
}
pattern8(6);
