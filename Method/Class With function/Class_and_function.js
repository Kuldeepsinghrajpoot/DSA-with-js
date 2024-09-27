
class Class_and_function{
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
    name(){
        return this.a+" "+this.b
    }

     
}

obj = new Class_and_function("kuldeep","Singh");

console.log(obj.name());