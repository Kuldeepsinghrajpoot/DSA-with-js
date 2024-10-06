// reverse string
function reverse(str) {
  if (str.length <= 1) {
    return str;
  }
  return str.charAt(str.length - 1) + reverse(str.slice(0, str.length - 1));
}
console.log(reverse("abcd"));

const str = "aabbccddeeffg";
console.log(reverse(str));
