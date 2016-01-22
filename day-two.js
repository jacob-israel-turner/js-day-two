
// objects vs arrays
var joe = ['Joe', 22, 'Brown', 'Australian']; // BAD EXAMPLE
var joe = {name: 'Joe', age: 22, eyeColor: 'Brown', nationality: 'Australian'};

// creating objects
var obj1 = new User();
var obj2 = {};
var obj3 = new Object(); // DON'T DO THIS
var obj4 = {name: 'Joe'};

var newObj = {};
newObj.test = 'stuff';

// Object keys
// for-in loop, Object.keys
for (var poop in userObject) {
  console.log(userObject[poop]);
}

var keyArray = Object.keys(userObject); // ['jacob', 'james', 'jeremy'];

// Method - a property on an object that is a function

var user = {
  name: 'James',
  age: 22,
  sayAge: function() {
    alert(this.name + ' is ' + this.age + ' years old!')
  }
}

user.sayAge()


// dot v. bracket notation

function returnMyName () {
  return 'jacob'
}

var myObj = {
  keyName: 'one',
  foo: 'two',
  jacob: 'three',
  '8': 'four'
}

var keyName = 'foo'
myObj.keyName // 'one'
myObj[keyName] // 'two'
myObj['keyName'] // 'one'
myObj[returnMyName()] // 'three'
myObj[3+7-2] // 'four'

console.log(keyName) // 'foo'
console.log('keyName') // 'keyName'

// Removing properties
delete myObj.foo;







//test
