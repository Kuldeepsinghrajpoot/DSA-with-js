class firstMethod {
    constructor(first, second) {
        this.first = first;
        this.second = second;
        console.log(first, second)
    }
}

class second extends firstMethod {
    constructor(firstcall, add) {
        super(firstcall)
        this.add = add;
        console.log(add);
    }
}

const object = new second(10, 14);
console.log(object)