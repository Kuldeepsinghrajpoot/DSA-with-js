// created a classical function

function classical(){
    this.name = "kuldeep singhr"
    return this;
}


console.log(new classical())


// created a arrow function

const arrow= ()=>{
    this.how = "how are you"
    return this;
}
// did not have constructor for the arrow functin , so we can not use the this keyword

// console.log(new arrow())