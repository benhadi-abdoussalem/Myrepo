/*ES6 Objects
JavaScript variables can be Object data types that contain many values called properties.
An object can also have properties that are function definitions called methods for performing actions on the object.
ES6 introduces shorthand notations and computed property names that make declaring and using objects easier to understand.
The new method definition shorthand does not require the colon (:) or function keyword, as in the grow function of the tree object declaration:*/
let tree = {
    height: 6,
    color: 'green',
    grow() {
      this.height += 2;
    }
  };
  tree.grow();
  console.log(tree.height); // 10
/*You can also use a property value shorthand when initializing properties with a variable by the same name.
For example, properties height and health are being initialized with variables named height and health:*/
let height = 5;
let health = 100;

let athlete = {
  height,
  health
};
/*When creating an object by using duplicate property names, the last property will overwrite the prior ones of the same name.
For Example:*/
var a = {x: 1, x: 2, x: 3, x: 4};
/*Duplicate property names generated a SyntaxError in ES5 when using strict mode. However, ES6 removed this limitation.*/
/*Computed Property Names
With ES6, you can now use computed property names. Using the square bracket notation [], we can use an expression for a property name, including concatenating strings. This can be useful in cases where we want to create certain objects based on user data (e.g. id, email, and so on).

Here are three examples:

Example 1:*/
let prop = 'name';
let id = '1234';
let mobile = '08923';

let user = {
  [prop]: 'Jack',
  [`user_${id}`]: `${mobile}`
};
/*Computed Property Names
With ES6, you can now use computed property names. Using the square bracket notation [], we can use an expression for a property name, including concatenating strings. This can be useful in cases where we want to create certain objects based on user data (e.g. id, email, and so on).

Here are three examples:

Example 1:*/
let prop = 'name';
let id = '1234';
let mobile = '08923';

let user = {
  [prop]: 'Jack',
  [`user_${id}`]: `${mobile}`
};
/*Computed Property Names
With ES6, you can now use computed property names. Using the square bracket notation [], we can use an expression for a property name, including concatenating strings. This can be useful in cases where we want to create certain objects based on user data (e.g. id, email, and so on).

Here are three examples:

Example 1:*/
let prop = 'name';
let id = '1234';
let mobile = '08923';

let user = {
  [prop]: 'Jack',
  [`user_${id}`]: `${mobile}`
};
/*Example 2:*/
var i = 0;
var a = {
  ['foo' + ++i]: i,
  ['foo' + ++i]: i,
  ['foo' + ++i]: i
};
/*Example 3:*/
var param = 'size';
var config = {
  [param]: 12,
  ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
};
console.log(config.mobileSize);
/*It is very useful when you need to create custom objects based on some variables.
Computed Property Names
With ES6, you can now use computed property names. Using the square bracket notation [], we can use an expression for a property name, including concatenating strings. This can be useful in cases where we want to create certain objects based on user data (e.g. id, email, and so on).

Here are three examples:

Example 1:*/
let prop = 'name';
let id = '1234';
let mobile = '08923';

let user = {
  [prop]: 'Jack',
  [`user_${id}`]: `${mobile}`
};
/*Example 2:*/
var i = 0;
var a = {
  ['foo' + ++i]: i,
  ['foo' + ++i]: i,
  ['foo' + ++i]: i
};
/*Example 3:*/
var param = 'size';
var config = {
  [param]: 12,
  ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
};
console.log(config.mobileSize);
/*It is very useful when you need to create custom objects based on some variables.*/
/*Object.assign() in ES6
ES6 adds a new Object method assign() that allows us to combine multiple sources into one target to create a single new object.
Object.assign() is also useful for creating a duplicate of an existing object.

Let's look at the following example to see how to combine objects:*/
let person = {
  name: 'Jack',
  age: 18,
  sex: 'male'
};
let student = {
  name: 'Bob',
  age: 20,
  xp: '2'
};
let newStudent = Object.assign({}, person, student);
/*Here we used Object.assign() where the first parameter is the target object you want to apply new properties to.
Every parameter after the first will be used as sources for the target. There are no limitations on the number of source parameters. However, order is important because properties in the second parameter will be overridden by properties of the same name in third parameter, and so on.

In the example above, we used a new object {} as the target and used two objects as sources.

Try changing the order of second and third parameters to see what happens to the result.

Now, let's see how we can use assign() to create a duplicate object without creating a reference (mutating) to the base object.
In the following example, assignment was used to try to generate a new object. However, using = creates a reference to the base object. Because of this reference, changes intended for a new object mutate the original object:*/
let person = {
  name: 'Jack',
  age: 18
};

let newPerson = person; //  newPerson references person
newPerson.name = 'Bob'; 

console.log(person.name); // Bob
console.log(newPerson.name); // Bob
/*To avoid this (mutations), use Object.assign() to create a new object.

For example:*/
let person = {
  name: 'Jack',
  age: 18
};

let newPerson = Object.assign({}, person); 
newPerson.name = 'Bob';

console.log(person.name); // Jack
console.log(newPerson.name); // Bob
/*Finally, you can assign a value to an object property in the Object.assign() statement.

For example:*/
let person = {
  name: 'Jack',
  age: 18
};

let newPerson = Object.assign({}, person, {name: 'Bob'});
/*Run the code and see how it works!*/
const obj1 = {
  a: 0,
  b: 2,
  c: 4
  };
  const obj2 = Object.assign({c: 5, d: 6}, obj1);
  console.log(obj2.c, obj2.d);
  Array Destructuring in ES6

/*The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
ES6 has added a shorthand syntax for destructuring an array.

The following example demonstrates how to unpack the elements of an array into distinct variables:
*/
let arr = ['1', '2', '3'];
let [one, two, three] = arr;

console.log(one); // 1
console.log(two); // 2
console.log(three); // 3

/*We can use also destructure an array returned by a function.

For example:
*/
let a = () => {
  return [1, 3, 2];
};

let [one, , two] = a();

/*Notice that we left the second argument's place empty.

The destructuring syntax also simplifies assignment and swapping values:

*/
let a, b, c = 4, d = 8;
[a, b = 6] = [2]; // a = 2, b = 6

[c, d] = [d, c]; // c = 8, d = 4
/*Run the code and see how it works!*/
