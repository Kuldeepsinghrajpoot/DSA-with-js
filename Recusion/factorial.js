// todo: factorial of a number

function basic(n) {
    if(n<=1){
        return 1;
    }
    
    return n*basic(n-1);
    
}

console.log(basic(50)); // 120