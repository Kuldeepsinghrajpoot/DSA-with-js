function reverseString(str) {
    if (str.length <= 0) {
        return "";
    }

    return reverseString(str.slice(1)) + str[0];
}

const str = "kuldeep";

const ans = reverseString(str);
console.log(ans);
