var arr = [1,5,7,8,9,15]; 

//in ra các số chẵn trong mảng

var evenNumber = arr.filter(num => num % 2 == 0  )
console.log(evenNumber);

//in ra các số lẻ  trong mảng
console.log('Số lẻ: ');
var odd  = arr.filter(num => num % 2 !== 0);
console.log(odd);

// in ra các số lớn hơn hoặc bằng 5 trong mảng
console.log('Các số >= 5');

var fiveGreater = arr.filter(num => num >= 5);
console.log(fiveGreater);

//in ra các số chia hết cho 5 trong mảng
console.log('Các số chia hết cho 5');
var sub = arr.filter( num => num % 5 === 0 );
console.log(sub);
//Tìm các số >5 của mảng và tăng các giá trị đó lên 1 đơn đơn vị
console.log('Các số lơn hơn 5');

var numbers = arr.filter( num => num > 5);
var increases  = numbers.map(num => num + 1);
console.log(increases);
//dùng slice để copy mảng từ phần tử số 3 đến phần tử cuối cùng
console.log('********');
var arr1 = arr.splice(3);
console.log(arr1);

//splice để xóa 1 phần tử trong mảng
console.log('Xóa phần tử trong mảng');

var deleteNum = arr.splice(0,1);
console.log(deleteNum);
console.log(arr);

//push thêm 1 phần tử vào cuối mảng 
console.log('Push phần tử vào cuối mảng');

var addNum = arr.push(26);
console.log(arr);