const time = Date.now();
const num1 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve(7);
    }, 2000);
})
// const num1 = function (value) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             resolve(7);
//         }, 2000);
//     }).then(data => value + data)
// }

const num2 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve(3);
    }, 5000);
})

Promise.all([num1, num2])
 .then(data => console.log(`Ket qua: ${data.reduce((a,b) => a + b)} - thoi gian thuc thi: ${Date.now() - time}s`))
 .catch(err => console.log(err)) 
// Hết 5 s


// num2.then(data => num1(data))
//  .then(result => console.log(`Ket qua: ${result} - thoi gian thuc thi: ${Date.now() - time}s`))
//  Hết 7s