var arr = [1, 8, 5, 2, 7, 6, 9, 2, 6];
console.log('Mảng gốc: ');
console.log(arr);
console.log('Mảng giảm dần: ');
var increaseArr = arr.sort((num1, num2) => num2 - num1);
console.log(increaseArr);

var descArr = arr.sort((num1, num2) => num1 - num2)
console.log('Mảng tăng dần');
console.log(descArr);


