'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString = '';
let inputLines = [];
let currentLine = 0;
process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});
process.stdin.on('end', function () {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});
function readLine() {
    return inputLines[currentLine++];
}
function main() {
    const name = readLine(); // Read name from input
    const age = readLine(); // Read age from input
    const country = readLine(); // Read country from input

    console.log('Name:', name);
    console.log('Age:', age);
    console.log('Country:', country);
}
