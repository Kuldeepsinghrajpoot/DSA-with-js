const reg = /[^a-zA-Z0-9]/g

const a = "kuldeep singh rajpoot &";
console.log(a.match(reg)); // [ ' ' ]