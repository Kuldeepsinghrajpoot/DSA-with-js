

(function(){
    let string = 'kuldeep singh rajpoot';

    let vowels = ['a','e','i','o','u'];
    console.log(vowels.join(''))
    // finding the vowels in the given string

    let counting=0;

    string.split('').forEach(element => {
        
            if (vowels.includes(element)) {
                counting++;
            }
        
    });

    console.log(counting)
})()

// this is a self call function
