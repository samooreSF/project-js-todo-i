/*
What types of objects do you need?

List out nouns and verbs involved in creating TODO lists.
Decide which nouns and verbs you want/need to model.
The nouns will be your objects and the values the functions.

Write simple functions that work on a few number of well-defined objects.

Keep the responsibilities separated as best you can:

1. Representing a real-life todo list as in-memory objects
2. Manipulating those in-memory objects
3. Reading and writing from the todos.txt file
4. Displaying information to the user
5. Rather user input and taking the appropriate actions
*/

const fs = require('fs');

let ask = process.argv[2];
let element = process.argv[3];
// console.log(ask);
// console.log(element);

//var read = fs.readFileSync(user, 'utf-8');


var read = fs.readFileSync('todos.txt', 'utf-8');

let split = read.split(/[\r\n]+/g);
let space = split.pop();
//console.log(split);

function list(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] =`${i + 1}. [ ] ${array[i]}`;
  }
  return array;
}
function string(array) {
  for (let i = 0; i < split.length; i++) {
    console.log(split[i]);
  }
}

function add(todo) {
  split.push(element);

  return string(split);
}

function remove(num) {
  split.splice(num - 1,1);
  return string(split);
}

function complete(array, num) {

  for (let i = 0; i < array.length; i++) {
    if (i === num-1) {
    let oldArray = array[i];
    let itemForDisplays = list(array);
    array[i] =`${i + 1}. [X] ${oldArray}`;
  }
  //console.log(array);
  return array;
}
}

if (ask === 'list') {
  string(list(split));
}
if (ask === 'add') {
  add(element);
}
if (ask === 'delete'){
  remove(element);
}
if (ask === 'complete'){
  string(complete(split,element));
}
