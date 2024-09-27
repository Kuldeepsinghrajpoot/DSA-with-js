// // form one d to 2d array
// // m=2 ,n=2

// // 1 2
// // 3 4

// function form2dArray(m, n) {
//   let arr = [];
//   let count = 1;
//   for (let i = 0; i < m; i++) {
//     let temp = [];
//     for (let j = 0; j < n; j++) {
//       temp.push(count);
//       count++;
//     }
//     arr.push(temp);
//   }
//   return arr;
// }

let arr=[[0,1],[1,2],[0,3],[3,3]]
let ans = []

for(let [i,j] of arr){
  // console.log(i^j)
  // ans[i] = i^j;
  ans.push(i^j^i)
}

ans.map((i)=>(
  console.log(i)
))