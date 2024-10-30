function stackFunction() {
    let stack = [];

    function pushElement(data) {
        stack.push(data);
        return stack;
    }

    function pop() {
        return stack.pop();
    }

    function peek() {
        return stack[stack.length - 1];
    }

    return { pushElement, pop, peek };
}

const st = stackFunction();
st.pushElement(20);
console.log(st.pushElement(10));
