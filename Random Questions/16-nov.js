// 1. What's the output?
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const member = new Person('Lydia', 'Hallie');
Person.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());

// Answer: TypeError

// In JavaScript, functions are objects, and therefore, the method getFullName gets added to the constructor function object itself. For that reason, we can call Person.getFullName(), but member.getFullName throws a TypeError.

// If you want a method to be available to all object instances, you have to add it to the prototype property:

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};

/// ------------------------------------------- Border 🫣🫣🔫 ------------------------------------------- ///

// 2. What's the output?
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const lydia = new Person('Lydia', 'Hallie');
const sarah = Person('Sarah', 'Smith');

console.log(lydia);
console.log(sarah);

// Answer: Person {firstName: "Lydia", lastName: "Hallie"} and undefined

// For sarah, we didn't use the new keyword. When using new, this refers to the new empty object we create. However, if you don't add new, this refers to the global object!

// We said that this.firstName equals "Sarah" and this.lastName equals "Smith". What we actually did, is defining global.firstName = 'Sarah' and global.lastName = 'Smith'. sarah itself is left undefined, since we don't return a value from the Person function.

