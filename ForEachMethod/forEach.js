// class FirstClass{
//    constructor(name ,year){
//     this.name = name;
//     this.year = year;
//    }
//    ageOfStudent(){
//     return this.name+" " +this.year;
//    }

// }

"use strict"
class Studen_Details{
    constructor(name ,age,RollNumber){
       this.name=name;
       this.age=age;
       this.RollNumber=RollNumber;
    }
     Student(){
        return this.name+" "+this.age+" "+this.RollNumber;

     }

}

let obj  = new Studen_Details("Kuldeep Singh",2001,"0901cs213d06");

console.log(obj.Student())
//document.getElementById("forEach").innerHTML=obj.Student();