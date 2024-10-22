function longestSubstring(str) {
    let ans = [];  // Array to store the current substring
    let maxLen = 0;  // Variable to track the maximum length of a substring

    for (let i = 0; i < str.length; i++) {
        // If the character is already in the array, remove characters until the duplicate is gone
        while (ans.includes(str[i])) {
            ans.shift();  // Remove the first element to shrink the window
        }

        // Add the current character to the array
        ans.push(str[i]);

        // Update the max length if the current window is longer
        maxLen = Math.max(maxLen, ans.length);
    }

    console.log(maxLen);  // Output the length of the longest substring
}

const s = "pwwkew";
longestSubstring(s);
