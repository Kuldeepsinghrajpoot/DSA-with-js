function palindrome(str) {
    const copy = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return copy === copy.split('').reverse().join('');
}

console.log(palindrome('heh  '))