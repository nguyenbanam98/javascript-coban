const time = Date.now();
const num1 = new Promise ((resolve, reject) => {
    setTimeout(function() {
        resolve(1);
    }, 4000);
})
const num2 = new Promise ((resolve, reject) => {
    setTimeout(function() {
        resolve(2);
    }, 2000);
})
const num3 = new Promise ((resolve, reject) => {
    setTimeout(function() {
        resolve(3);
    }, 1000);
})
const num4 = new Promise ((resolve, reject) => {
    setTimeout(function() {
        resolve(4);
    }, 1000);
})
num1.then(function(data) {
    console.log(`Số ${data} - execution time: ${Date.now() - time}s`);
    return num3;
})
.then(function(data) {
    console.log(`Số ${data} - execution time: ${Date.now() - time}s`);
    return num4;
})
.then (function(data) {
    console.log(`Số ${data} - execution time: ${Date.now() - time}s`);
    return num2;
})
.then (function(data) {
    console.log(`Số ${data} - execution time: ${Date.now() - time}s`);
})

console.log('số 1');
setTimeout(function() {
    console.log('số 2');
}, 0);
console.log('số 3');
// Đáp án sẽ 1 3 sau đó là 2, vì setTimeout là hàm xử lý bất đồng bộ nên sẽ được đưa vào Web/NodeAPI để xử lý
// 1 và 3 là xử lý đồng bộ nên sẽ chạy đầu tiên 


