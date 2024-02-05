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

/*Array Destructuring in ES6*/

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
/*Object Destructuring in ES6
Similar to Array destructuring, Object destructuring unpacks properties into distinct variables.

For example:*/
let obj = {h:100, s: true};
let {h, s} = obj;

console.log(h); // 100
console.log(s); // true
/*We can assign without declaration, but there are some syntax requirements for that:*/
let a, b;
({a, b} = {a: 'Hello ', b: 'Jack'});

console.log(a + b); // Hello Jack
/*The () with a semicolon (;) at the end are mandatory when destructuring without a declaration. However, you can also do it as follows where the () are not required:*/
let {a, b} = {a: 'Hello ', b: 'Jack'};
console.log(a + b);
/*You can also assign the object to new variable names.

For example:*/
var o = {h: 42, s: true};
var {h: foo, s: bar} = o;

//console.log(h); // Error
console.log(foo); // 42
/*Finally you can assign default values to variables, in case the value unpacked from the object is undefined.

For example:*/
var obj = {id: 42, name: "Jack"};

let {id = 10, age = 20} = obj;

console.log(id); // 42
console.log(age); // 20
/*Run the code and see how it works!*/

/*ES6 Rest Parameters
Prior to ES6, if we wanted to pass a variable number of arguments to a function, we could use the arguments object, an array-like object, to access the parameters passed to the function.
For example, let's write a function that checks if an array contains all the arguments passed:*/

function containsAll(arr) {
  for (let k = 1; k < arguments.length; k++) {
    let num = arguments[k];
    if (arr.indexOf(num) === -1) {
      return false;
    }
  }
  return true;
}
let x = [2, 4, 6, 7];
console.log(containsAll(x, 2, 4, 7));
console.log(containsAll(x, 6, 4, 9));

/*We can pass any number of arguments to the function and access it using the arguments object.

While this does the job, ES6 provides a more readable syntax to achieve variable number of parameters by using a rest parameter:

*/
function containsAll(arr, ...nums) {
  for (let num of nums) {
    if (arr.indexOf(num) === -1) {
      return false;
    }
  }
  return true;
}
/*
The ...nums parameter is called a rest parameter. It takes all the "extra" arguments passed to the function. The three dots (...) are called the Spread operator.
Only the last parameter of a function may be marked as a rest parameter. If there are no extra arguments, the rest parameter will simply be an empty array; the rest parameter will never be undefined.*/

//complete the function
function Add(...myParams){
  let myNumber = 0; 
  for (let myParam of myParams) 
  { myNumber += myParam; } 
return myNumber; }
console.log(Add(1,2,3));
console.log(Add(4,14,5,9,14));
console.log(Add(2,36));

/*The Spread Operator
This operator is similar to the Rest Parameter, but it has another purpose when used in objects or arrays or function calls (arguments).

[h2]Spread in function calls[/h2]
It is common to pass the elements of an array as arguments to a function. Before ES6, we used the following method:*/
function myFunction(w, x, y, z) {
  console.log(w + x + y + z);
}
var args = [1, 2, 3];
myFunction.apply(null, args.concat(4));

/*ES6 provides an easy way to do the example above with spread operators:
*/
const myFunction = (w, x, y, z) => {
  console.log(w + x + y + z);
};
let args = [1, 2, 3];
myFunction(...args, 4);

/*Example:*/

var dateFields = [1970, 0, 1];  // 1 Jan 1970
var date = new Date(...dateFields);
console.log(date);

/*[h2]Spread in array literals[/h2]
Before ES6, we used the following syntax to add an item at middle of an array:*/

var arr = ["One", "Two", "Five"];

arr.splice(2, 0, "Three");
arr.splice(3, 0, "Four");
console.log(arr);

/*You can use methods such as push, splice, and concat, for example, to achieve this in different positions of the array. However, in ES6 the spread operator lets us do this more easily:*/

let newArr = ['Three', 'Four']; 
let arr = ['One', 'Two', ...newArr, 'Five'];
console.log(arr);

/*[h2]Spread in object literals[/h2]
In objects it copies the own enumerable properties from the provided object onto a new object.
*/
const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 5 };

const clonedObj = {...obj1}; // { foo: "bar", x: 42 }
const mergedObj = {...obj1, ...obj2}; // { foo: "baz", x: 42, y: 5 }

/*However, if you try to merge them you will not get the result you expected:*/
*/
const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 5 };
const merge = (...objects) => ({...objects});

let mergedObj = merge(obj1, obj2);
// { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 5 } }

let mergedObj2 = merge({}, obj1, obj2);
// { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 5 } }

//Shallow cloning or merging objects is possible with another operator called Object.assign().

/*Classes in ES6
In this lesson we'll explain how to create a class that can be used to create multiple objects of the same structure.
A class uses the keyword class and contains a constructor method for initializing.

For example:*/
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
/*A declared class can then be used to create multiple objects using the keyword new.
For example:
*/
const square = new Rectangle(5, 5);
const poster = new Rectangle(2, 3);

/*Class Declarations are not hoisted while Function Declarations are. If you try to access your class before declaring it, ReferenceError will be returned.


You can also define a class with a class expression, where the class can be named or unnamed.
A named class looks like:
*/
var Square = class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
/*
In the unnamed class expression, a variable is simply assigned the class definition:
*/
var Square = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
/*
The constructor is a special method which is used for creating and initializing an object created with a class.
There can be only one constructor in each class.

Class Methods in ES6
ES6 introduced a shorthand that does not require the keyword function for a function assigned to a method's name. One type of class method is the prototype method, which is available to objects of the class.

*/
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  get area() {
    return this.calcArea();
  }
  calcArea() {
    return this.height * this.width;
  }
}
const square = new Rectangle(5, 5);
console.log(square.area); // 25
/*
In the code above, area is a getter, calcArea is a method.
Another type of method is the static method, which cannot be called through a class instance. Static methods are often used to create utility functions for an application.
*/
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
  }
}
const p1 = new Point(7, 2);
const p2 = new Point(3, 8);

console.log(Point.distance(p1, p2));
/*As you can see, the static distance method is called directly using the class name, without an object.
Class Methods in ES6
You are making a program so that students are able to calculate their average of 3 exam scores.
The given program takes the scores of 3 exams as input and declares the Exams class.
Add a static method average() to class Exams, which will take the scores as parameters, and calculate and return the average score rounded to the nearest integer so that the code in main works correctly.

Sample Input
74
80
68

Sample Output
74

Recall Math.round() function to round the number with the floating point to the nearest integer.
*/
function main() {
  var exam1 = parseInt(readLine(), 10);
  var exam2 = parseInt(readLine(), 10);
  var exam3 = parseInt(readLine(), 10);
  
  console.log(Exams.average(exam1,exam2,exam3));
  
}
class Exams{
  constructor(x, y, z) {
  this.x = exam1;
  this.y = exam2;
  this.z = exam3;
}
  static average(x, y, z) {
  const averageexams = (x+y+z)/3;
  return Math.round(averageexams) ;
}
}
/*Inheritance in ES6
The extends keyword is used in class declarations or class expressions to create a child of a class. The child inherits the properties and methods of the parent.
*/
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}
class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.');
  }
}

let dog = new Dog('Rex');
dog.speak();
/*
In the code above, the Dog class is a child of the Animal class, inheriting its properties and methods.

If there is a constructor present in the subclass, it needs to first call super() before using this. Also, the super keyword is used to call parent's methods.

For example, we can modify the program above to the following:
*/
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}class Dog extends Animal {
  speak() {
    super.speak(); // Super
    console.log(this.name + ' barks.');
  }
}

let dog = new Dog('Rex');
dog.speak();
/*
In the code above, the parent's speak() method is called using the super keyword.
/*
ES6 Map
A Map object can be used to hold key/value pairs. A key or value in a map can be anything (objects and primitive values).

The syntax new Map([iterable]) creates a Map object where iterable is an array or any other iterable object whose elements are arrays (with a key/value pair each).

An Object is similar to Map but there are important differences that make using a Map preferable in certain cases:
1) The keys can be any type including functions, objects, and any primitive.
2) You can get the size of a Map.
3) You can directly iterate over Map.
4) Performance of the Map is better in scenarios involving frequent addition and removal of key/value pairs.

The size property returns the number of key/value pairs in a map.
*/
let map = new Map([['k1', 'v1'], ['k2', 'v2']]);

console.log(map.size); // 2
/*
Methods
set(key, value) Adds a specified key/value pair to the map. If the specified key already exists, value corresponding to it is replaced with the specified value.
get(key) Gets the value corresponding to a specified key in the map. If the specified key doesn't exist, undefined is returned.
has(key) Returns true if a specified key exists in the map and false otherwise.
delete(key) Deletes the key/value pair with a specified key from the map and returns true. Returns false if the element does not exist.
clear() Removes all key/value pairs from map.
keys() Returns an Iterator of keys in the map for each element.
values() Returns an Iterator of values in the map for each element.
entries() Returns an Iterator of array[key, value] in the map for each element.

*/
let map = new Map();
map.set('k1', 'v1').set('k2', 'v2');
console.log(map.get('k1')); // v1
console.log(map.has('k2')); // true
for (let kv of map.entries())
  console.log(kv[0] + " : " + kv[1]);
/*
The above example demonstrates some of the ES6 Map methods.

Map supports different data types i.e. 1 and "1" are two different keys/values.

ES6 Map
Five employees at a company are stored in Map in the program you are given. Their names are set as keys and their positions as values. The company is hiring one more employee. The program should take the name and the position as inputs and store them in the existing map.
Complete the program to perform that operation and output to the console the list of employees in the format shown in the sample output.

Sample Input
Bob
Developer

Sample Output
Richard : Developer
Maria : SEO Specialist
Tom : Product Manager
David : Accountant
Sophia : HR Manager
Bob : Developer

The entries() method returns an Iterator of array[key, value] in the map for each element.
Don't forget to put spaces before and after the colon (:) in the output.
*/
function main() {
  var name = readLine();
  var position = readLine();
  let employees = new Map([
  ["Richard", "Developer"],
  ["Maria", "SEO Specialist"],
  ["Tom", "Product Manager"],
  ["David", "Accountant"],
  ["Sophia", "HR Manager"]
  ]);

  //add the new pair to the map
  employees.set(name, position)
  for (var i of employees.entries()){
      //your code for the output
      console.log(i[0]+" : "+i[1] )
  } 
}
/*ES6 Set
A Set object can be used to hold unique values (no repetitions are allowed).
A value in a set can be anything (objects and primitive values).

The syntax new Set([iterable]) creates a Set object where iterable is an array or any other iterable object of values.

The size property returns the number of distinct values in a set.
*/
let set = new Set([1, 2, 4, 2, 59, 9, 4, 9, 1]);

console.log(set.size); // 5
/*
Methods
add(value) Adds a new element with the given value to the Set.
delete(value) Deletes a specified value from the set.
has(value) Returns true if a specified value exists in the set and false otherwise.
clear() Clears the set.
values() Returns an Iterator of values in the set.
*/
let set = new Set();

set.add(5).add(9).add(59).add(9);

console.log(set.has(9));

for (let v of set.values())
  console.log(v);
/*
The above example demonstrates some of the ES6 Set methods.

Set supports different data types i.e. 1 and "1" are two different values.
NaN and undefined can also be stored in Set.*/
