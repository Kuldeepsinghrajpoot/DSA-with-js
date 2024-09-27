function Capital(str) {
    let newStr = str.split('');

    let counter =0;
    for(let i of newStr){
        if (i>'A' && i<"Z" ) {
            counter++;
        }
    }

    return counter;
}


console.log(Capital( "KULDEEP3%&*("))