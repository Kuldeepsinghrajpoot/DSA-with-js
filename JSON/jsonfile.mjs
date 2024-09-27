// let student = '{"Student_Information :" [' 
//  + '{"Name" : "Kuldeep Singh Rajpoot"},'
//  + '{"Year" : "3rd"}]}';


// let obj = JSON.parse(student);
// console.log(obj);

// const dataJson = require('config.json');

import Data from './jsondata.json' assert { type: "json" };
// console.log(typeof dataJson);
// console.log(dataJson);
var mydata = JSON.parse(Data);
console.log(mydata.Intensity);

// try {
    
//     Data.map(e=>{
//         console.log([e.Intensity, e.Likelihood, e.Relevance, e.Year, e.Country, e.Topics, e.Region, e.Cit])
//     })
// } catch (e) {
//     console.log("something went wrong");
// }