// todo: factorial of a number

function basic(n) {
    if(n===0){
        return 0;
    }
    console.log(n)
    return n*basic(n-1);
    
}

console.log(basic(5)); // 120