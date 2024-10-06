const file = { name: "kuldeep", mid: "singh", last: "rajpoot",grade:{
    ten:'82'
} };

// const {grade:[...grade]} = file
const result = {...file,name:"pradeep",mid:'Singh',}
console.log(result)