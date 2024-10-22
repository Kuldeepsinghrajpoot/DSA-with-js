const deadlySin = (input) => {
    // Split the input by lines
    const data = input.trim().split("\n");

    // The first line is the number of test cases
    const t = parseInt(data[0], 10);

    // Loop through the remaining lines to process x, y pairs
    for (let i = 1; i <= t; i++) {
        const [x, y] = data[i].split(" ").map(Number);
        console.log(x, y); // Do your desired operations here
    }
};

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let input = "";
process.stdin.on("data", (data) => {
    input += data;
});

process.stdin.on("end", () => {
    deadlySin(input);
});
