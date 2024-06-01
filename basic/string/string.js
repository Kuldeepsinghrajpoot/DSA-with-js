const str = "kuldeep singh rajpoot";

// anchor

// at
console.log(str.at(5)); // e



// charAt
console.log(str.charAt(5)); // e

// charCodeAt
console.log(str.charCodeAt(5)); // 101 (ASCII code for 'e')

// codePointAt
console.log(str.codePointAt(5)); // 101

// concat
console.log(str.concat(" is a programmer")); // kuldeep singh rajpoot is a programmer

// constructor
console.log(str.constructor); // [Function: String]

// endsWith
console.log(str.endsWith("rajpoot")); // true


// includes
console.log(str.includes("singh")); // true

// indexOf
console.log(str.indexOf("e")); // 3

// lastIndexOf
console.log(str.lastIndexOf("p")); // 19

// length
console.log(str.length); // 20

// link

// localeCompare
console.log(str.localeCompare("kuldeep singh rajpoot")); // 0 (equal strings)

// match
console.log(str.match(/singh/)); // [ 'singh', index: 8, input: 'kuldeep singh rajpoot', groups: undefined ]

// matchAll
console.log([...str.matchAll(/p/g)]); // [ [ 'p', index: 4, input: 'kuldeep singh rajpoot', groups: undefined ], [ 'p', index: 19, input: 'kuldeep singh rajpoot', groups: undefined ] ]

// normalize
console.log(str.normalize()); // kuldeep singh rajpoot

// padEnd
console.log(str.padEnd(25, '.')); // kuldeep singh rajpoot.....

// padStart
console.log(str.padStart(25, '.')); // .....kuldeep singh rajpoot

// repeat
console.log(str.repeat(2)); // kuldeep singh rajpootkuldeep singh rajpoot

// replace
console.log(str.replace("rajpoot", "developer")); // kuldeep singh developer

// replaceAll
console.log(str.replaceAll("e", "E")); // kuldEEp singh rajpoot

// search
console.log(str.search("singh")); // 8

// slice
console.log(str.slice(8, 13)); // singh

// small

// split
console.log(str.split(" ")); // [ 'kuldeep', 'singh', 'rajpoot' ]

// startsWith
console.log(str.startsWith("kuldeep")); // true

// strike

// sub

// substring
console.log(str.substring(8, 13)); // singh


// toLocaleLowerCase
console.log(str.toLocaleLowerCase()); // kuldeep singh rajpoot

// toLocaleUpperCase
console.log(str.toLocaleUpperCase()); // KULDEEP SINGH RAJPOOT

// toLowerCase
console.log(str.toLowerCase()); // kuldeep singh rajpoot

// toString
console.log(str.toString()); // kuldeep singh rajpoot

// toUpperCase
console.log(str.toUpperCase()); // KULDEEP SINGH RAJPOOT

// trim
console.log("   kuldeep singh rajpoot   ".trim()); // kuldeep singh rajpoot

// trimEnd
console.log("   kuldeep singh rajpoot   ".trimEnd()); //    kuldeep singh rajpoot

// trimStart
console.log("   kuldeep singh rajpoot   ".trimStart()); // kuldeep singh rajpoot   

// valueOf
console.log(str.valueOf()); // kuldeep singh rajpoot
