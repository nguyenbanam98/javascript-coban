var greeting = 'Welcome to Nodemy, Nodemy is stand for Nodejs Academy';

var strLength = greeting.length;
console.log(strLength);

var nodemy = greeting.indexOf('nodemy');
console.log(nodemy);

var Nodemy = greeting.indexOf('Nodemy');
console.log(Nodemy);
var startWel = greeting.startsWith('Welcome');
console.log(startWel);

var str = greeting.substring(strLength-7, strLength);
console.log(str);

var arr = greeting.split(' ');
console.log(arr);

// var newStr = greeting.replace(/Nodemy/g,'NODEMY');

// console.log(newStr);
console.log(greeting);

while (greeting.indexOf('Nodemy') !== -1) {
    greeting = greeting.replace('Nodemy', 'NODEMY');
}
console.log(greeting);
var char = greeting.charAt(4);
console.log(char);