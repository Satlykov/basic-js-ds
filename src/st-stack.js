const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
module.exports = class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    push(el) {
        this.items[this.count] = el;
        console.log(`${el} add to ${this.count}`)
        this.count += 1;
        return this.count - 1;
    }

    pop() {
        if(this.count == 0) return undefined;
        let deletItem = this.items[this.count - 1];
        this.count -= 1;
        console.log(`${deletItem} removed`)
        return deletItem;
    }

    peek() {
        console.log(`Top is ${this.items[this.count - 1]}`)
        return this.items[this.count - 1];
    }
};
