/*
*Variable and data types
*/
var firstName='John';
console.log(firstName);

var lastName='Smith';
var age =28;

var fullAge=true;

console.log(fullAge);

var job;
console.log(job);

job='Teacher';

console.log(job);

var _3years=3; //variable name must be string,$ or_ cannot use reserved keyword as varaible name 

var johnMark='John and MArk';

/*
*Variable mutation and type correction
*/

// type coercion
var firstName='John';
var age=28

console.log(firstName+' '+age); // Unlike another programming language JS auto convert Int to String or even boolean (type coercion) 

// variable mutation 

age='twenty eight';
job ='driver';

alert(firstName+' '+'is a'+' '+job);

var job=prompt('What is his job?');
console.log(job);