'use strict';

const util = require('util');

class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        //if the top of the stack is empty, then the data will be the
        //top of the stack
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }
        //if the top already has something then create a new node
        //add data to the new node
        // have the pointer point to the top
        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        //in order to remove the top of the stack, you have to point
        //the pointer to the next item and that next item becomes the
        //top of the stack
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

function peek(stack) {
    console.log(stack.top.data);
}

function display(stack) {
    if (stack.top) {
        display(stack.top);
    } else if (stack.next) {
        console.log(stack.data);
        display(stack.next);
    } else {
        console.log(stack.data);
        return;
    }
}

function is_palindrome(string) {
    string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    // your code goes here

    let stackOne = new Stack();
    let stackTwo = new Stack();

    string.split('').forEach(char => stackOne.push(char));
    const reversed = string.split('');
    let bool = true;

    reversed.forEach(char => {
        if (stackOne.pop() !== char) {
            bool = false;
        }
    });
    return bool;
}

function matchingParens(expression) {
    // A stack can be used to ensure that an arithmetic expression
    // has balanced parentheses. Write a function that takes an
    // arithmetic expression as an argument and returns the
    // position in the expression where a parenthesis
    // is missing or incorrect.
    //  For version 1, the parentheses you need to consider are ( and ).
    //  Finding a close parenthesis without an
    // open parenthesis is an error (report the location of the close);
    // reaching the end of the string while still "holding" an
    // open parenthesis is also an error (report the location of the open)
}

function sortStack(stack) {
    // Write a program to sort a stack such that
    //  the smallest items are on the top (in ascending order)
    // You can use an additional stack, but you
    // may not use any other data structure
    //(such as an array, or linked list).
    // create a new stack
    // loop through original stack and find the maxmum

    console.log(stack);
}

function main() {
    let starTrek = new Stack();
    starTrek.push('Kirk');
    starTrek.push('Spock');
    starTrek.push('Bones');
    starTrek.push('Scotty');
    // console.log(JSON.stringify(starTrek))
    peek(starTrek);
    // display(starTrek)

    // starTrek.pop();
    // starTrek.pop();
    // display(starTrek);

    // console.log(is_palindrome('A man, a plan, a canal: Panama'));
    sortStack(starTrek);
}

main();
