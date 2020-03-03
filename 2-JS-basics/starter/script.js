/********************************** 
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

/********************************** 
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

/********************************** 
*Basic operators
*/
var year,yearJohn,yearMark;
now =2018;
ageJohn=28;
ageMark=33;

//Math operator
yearJohn=now-ageJohn;
yearMark=now-ageMark;

console.log(yearJohn);

console.log(now+2);
console.log(now*2);
console.log(now/10);

//logical operators
var johnOlder=ageJohn<ageMark
console.log(johnOlder)

//typeof operator
console.log(typeof johnOlder)
console.log(typeof ageJohn)
console.log(typeof 'Mark is older than john')
var x
console.log(typeof x)

/********************************** 
*Operator precendence(which opearator proceeed first )
*/

var now =2018;
var yaerJohn =1989;
var fullAge=18;

var isFullAge=now-yearJohn >=fullAge
console.log(isFullAge)