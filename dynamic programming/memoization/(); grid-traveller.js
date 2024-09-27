//  grid traveller;

function gridTraverller(m, n) {
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    return gridTraverller(m - 1, n) + gridTraverller(m, n - 1);
}
let m = 2, n = 3;
// console.log(gridTraverller(18, 18))

//  using dp;

function traveller(m,n,memo={}){

    if(m===1 & n===1) return 1;
    if(m===0 || n===0) return 0;
    // todo : adding the values into the single key pair
    let key = m+','+n;

    if (key in memo) {
        return memo[key]
    }

    memo[key] = traveller(m-1,n,memo)+ traveller(m,n-1,memo);

    return memo[key];
}

console.log(traveller(530,53))