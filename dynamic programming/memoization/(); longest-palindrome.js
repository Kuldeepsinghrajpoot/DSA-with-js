const palindrome = (str, memo = {}) => {
    // Base case: if the string is already in memo, return the cached result
    if (str in memo) return memo[str];

    // Check if the string is a palindrome by comparing it with its reverse
    if (str === str.split('').reverse().join('')) {
        memo[str] = str;  // Store the palindrome in memo
        return str;
    }

    // Recursively check substrings by removing first or last character
    let leftPalindrome = palindrome(str.slice(1), memo);  // Check by removing the first character
    let rightPalindrome = palindrome(str.slice(0, -1), memo);  // Check by removing the last character

    // Choose the longer palindrome found from left or right
    if (leftPalindrome && rightPalindrome) {
        memo[str] = leftPalindrome.length > rightPalindrome.length ? leftPalindrome : rightPalindrome;
    } else {
        memo[str] = leftPalindrome || rightPalindrome;
    }

    return memo[str];
}

console.log(palindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"));  // Output: "bab" or "aba" (both are palindromes)
