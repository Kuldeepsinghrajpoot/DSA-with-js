function additionMethod(a, b, cb) {
    return cb(a + b)
}

console.log(additionMethod(5, 6, function (val) {
    console.log(val)
    return val //todo: this return statement is  necessary to return the value to the console.log statement below otherwise it will return undefined 
}))

