// var sum = -1;

// for(var i = 0; i < 100; i++){

//     var sum = i * 100
// }
// console.log(sum);
// console.log(i);
//sum = 9900 vì var cho phép khai báo lại (redeclaring), còn i = 100 vì var không hỗ trợ block scope, nên biến
// i lúc này sẽ được lưu trữ ở global scope 


function capitalName() {
    this.name = this.name.toUpperCase();
    console.log(this.name);

}

var person1 = {
    name: 'nam', birthDay: '1996-11-26'
}
var person2 = {
    name: 'hiep', birthDay: '1999-01-26'
}
var person3 = {
    name: 'tuan', birthDay: '1999-01-26'
}
capitalName.call(person1, person1.name);
capitalName.apply(person2, [person2.name]);
let result = capitalName.bind(person3);
result(person3.name)

let time = setInterval(() => {
    console.log(new Date);
}, 1000);
clearInterval(time)