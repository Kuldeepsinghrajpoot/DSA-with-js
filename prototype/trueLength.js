// creating a function its take a string and return the truelength of a function
'use strict';

Object.prototype.trueLength=function(){
    return this.trim().length
}
//  console.log(''.trueLength())


function trueLengths(str){

    return {method:str.trim().length}
}

const length = trueLengths( '         s')
// console.log(length.method)


Object.prototype.userInfo = function(){
    return (
        this.username='kuldeep',
        this.subject='Advance javascript',
        this.method='function based'
    )
}
const object = {}
object.userInfo()
console.log(object.username)