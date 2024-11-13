// 1. What's the output?
function sayHi() {
    console.log(name);
    console.log(age);
    var name = 'Lydia';
    let age = 21;
}

sayHi();

// Answer: undefined and ReferenceError

/// ------------------------------------------- Border 🫣🫣🔫 ------------------------------------------- ///

// 2. What's the output?
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
}

// Answer: 3 3 3 and 0 1 2

// Because of the event queue in JavaScript, the setTimeout callback function is called after the loop has been executed. Since the variable i in the first loop was declared using the var keyword, this value was global. During the loop, we incremented the value of i by 1 each time, using the unary operator ++. By the time the setTimeout callback function was invoked, i was equal to 3 in the first example.

// In the second loop, the variable i was declared using the let keyword: variables declared with the let (and const) keyword are block-scoped (a block is anything between { }). During each iteration, i will have a new value, and each value is scoped inside the loop.

/// ------------------------------------------- Border 🫣🫣🔫 ------------------------------------------- ///

// 3. What's the output?
const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());

// Answer: 20 and NaN

// With arrow functions, the this keyword refers to its current surrounding scope, unlike regular functions! This means that when we call perimeter, it doesn't refer to the shape object, but to its surrounding scope (window for example).

// Since there is no value radius in the scope of the arrow function, this.radius returns undefined which, when multiplied by 2 * Math.PI, results in NaN.

/// ------------------------------------------- Border 🫣🫣🔫 ------------------------------------------- ///

// 4. What's the output?
+true;
!'Lydia';

// Answer: 1 and false

// The unary plus tries to convert an operand to a number. true is 1, and false is 0.

// The string 'Lydia' is a truthy value. What we're actually asking, is "Is this truthy value falsy?". This returns false.

/// ------------------------------------------- Border 🫣🫣🔫 ------------------------------------------- ///

// 5. Which one is true?
const bird = {
    size: 'small',
};

const mouse = {
    name: 'Mickey',
    small: true,
};

// Answer: A

// A: mouse.bird.size is not valid
// B: mouse[bird.size] is not valid
// C: mouse[bird["size"]] is not valid
// D: All of them are valid

/// ------------------------------------------- Border 🫣🫣🔫 ------------------------------------------- ///

// 6. What's the output?
let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting);

// Answer: Hello

/// ------------------------------------------- Border 🫣🫣🔫 ------------------------------------------- ///

// 7. What's the output?
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);

// Answer: true false false

// new Number() is a built-in function constructor. Although it looks like a number, it's not really a number: it has a bunch of extra features and is an object.

/// ------------------------------------------- Border 🫣🫣🔫 ------------------------------------------- ///

// 8. What's the output?
class Chameleon {
    static colorChange(newColor) {
        this.newColor = newColor;
        return this.newColor;
    }

    constructor({ newColor = 'green' } = {}) {
        this.newColor = newColor;
    }
}

const freddie = new Chameleon({ newColor: 'purple' });
console.log(freddie.colorChange('orange'));

// Answer: TypeError

//   The colorChange function is static. Static methods are designed to live only on the constructor in which they are created, and cannot be passed down to any children or called upon class instances. Since freddie is an instance of class Chameleon, the function cannot be called upon it. A TypeError is thrown.

/// ------------------------------------------- Border 🫣🫣🔫 ------------------------------------------- ///

// 9. What's the output?
let greeting;
greetign = {}; // Typo! it assign in global envirement
console.log(greetign);

// Answer: {}

// It logs the object, because we just created an empty object on the global object! When we mistyped greeting as greetign, the JS interpreter actually saw this as:

// global.greetign = {} in Node.js
// window.greetign = {}, frames.greetign = {} and self.greetign in browsers.
// self.greetign in web workers.
// globalThis.greetign in all environments.
// In order to avoid this, we can use "use strict". This makes sure that you have declared a variable before setting it equal to anything.

/// ------------------------------------------- Border 🫣🫣🔫 ------------------------------------------- ///

// 10. What happens when we do this?
function bark() {
    console.log('Woof!');
}

bark.animal = 'dog';

// Answer: Nothing, this is totally fine!
// This is possible in JavaScript, because functions are objects! (Everything besides primitive types are objects)

