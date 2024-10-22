import readline from "readline";

// Create a readline interface similar to Scanner in Java
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to process input and terminate the program
const readFunction = (input) => {
    console.log(input);
    read.close();  // Close the interface, which also exits the program
};

// Prompt the user for input and call readFunction once input is provided
let data = ""
read.question("Enter input: ", (input) => {
    data+=input;
    readFunction(data);
});
