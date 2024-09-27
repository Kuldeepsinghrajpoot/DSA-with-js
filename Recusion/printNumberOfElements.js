function print(n) {

    if(n===0) return 0;
    console.log(n)
    return print(n-1)+n
}

console.log(print(5))