// todo: higher order function here

function higherOrderFunction(a, b, cb) {
    return cb(a + b)
}

higherOrderFunction(5, 6, function (val) {
    console.log(val)
})
