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