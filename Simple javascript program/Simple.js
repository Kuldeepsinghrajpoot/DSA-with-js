class Addition {
    constructor(A, B,C) {
        this.A = A;
        this.B = B;
        this.C = C;
    }
    Addition_two_Values() {

        switch (this.C) {
            case 1:
                console.log("Number is one");
                break;
            case 2:
                console.log("Number is two");    
            
            case 3:
                console.log("Number is Three");    
            default:
                break;
        }
        return this.A + this.B;
    }
}

class Multiplay extends Addition {
    constructor(A, B,C) {
        super(A, B,C);
        this.A = A;
        this.B = B;

    }
    Multiplay_two_values() {
        return this.A * this.B;
    }

}

obj = new Multiplay(4, 5,3);

console.log(obj.Addition_two_Values())
console.log(obj.Multiplay_two_values())