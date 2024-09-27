let num = 12345.6789;

// toExponential
console.log(num.toExponential());    // Output: "1.23456789e+4"
console.log(num.toExponential(2));   // Output: "1.23e+4"

// toFixed
console.log(num.toFixed());          // Output: "12346"
console.log(num.toFixed(2));         // Output: "12345.68"

// toLocaleString
console.log(num.toLocaleString());   // Output might be "12,345.679" depending on the locale
console.log(num.toLocaleString('de-DE')); // Output: "12.345,679"
console.log(num.toLocaleString('en-IN', { maximumSignificantDigits: 3 })); // Output: "12,300"

// toPrecision
console.log(num.toPrecision(4));     // Output: "1.235e+4"
console.log(num.toPrecision(7));     // Output: "12345.68"

// toString
console.log(num.toString());         // Output: "12345"
console.log(num.toString(2));        // Output: "11000000111001" (binary)
console.log(num.toString(16));       // Output: "3039" (hexadecimal)

// valueOf
let numObj = new Number(12345);
console.log(numObj.valueOf());       // Output: 12345
