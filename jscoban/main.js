var arr = [1, 5, 7, 8, 9, 15, 8];

// in ra số chắn trong mảng 

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}

console.log('****************');


//in ra số lẻ trong mảng 
for ( i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        console.log(arr[i]);
    }
}

console.log('****************');

//in ra các số lớn hơn hoặc bằng 5 của mảng
for ( i = 0; i < arr.length; i++) {
    if (arr[i] >= 5) {
        console.log(arr[i]);
    }
}

console.log('****************');

//Cộng tổng các số chia hết cho 5 của mảng
var sum = 0;
for ( i = 0; i < arr.length; i++) {
    if(arr[i] % 5 == 0) {
        sum = sum + arr[i];
    }
}
console.log(sum);

console.log('****************');
//Tìm ra tích 3 số đầu của mảng array

var mult = 0;
for (var i = 0; i < 3; i++) {
    mult = mult + arr[i];
}
console.log(mult);

console.log('****************');

//Tính tổng 3 phần tử cuối của mảng

var sumLast = 0;
 for ( i = arr.length - 1; i > arr.length - 4; i-- ) {
    sumLast = sumLast + arr[i];
 }
 console.log(sumLast);

 console.log('****************');

 // Tìm xem trong array có phần tử nào là số 5 không?

 for ( i = 0; i < arr.length; i++) {
     if(arr[i] === 5) {
         console.log("số 5 tồn tại trong mảng");
     }
 }

 console.log('****************');

 //Đếm số phần tử = 8 trong mảng;

 var count = 0;

 for ( i = 0; i < arr.length; i++) {
     if( arr[i] === 8 )
      count++;
 }
console.log(count);