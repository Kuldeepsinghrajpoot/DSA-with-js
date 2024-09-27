// task create new method to remove the extra space and count the length of the string


String.prototype.truelength=function(){

   this.trim().length
    return this
}

console.log('hello'.truelength())