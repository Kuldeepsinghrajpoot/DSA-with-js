class Array{
    constructor(a){
        this.a =a;
    }
     display(){
        Array[this.a];
        let i=0;
        for(i=0;i<this.a;i++){
            Array[i];
        }
        for(i=0;i<4;i++){
            console.log(Array[i]);
        }
     }
}

ar = new Array(4);
console.log(ar.display())