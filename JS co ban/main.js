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
var s = 0;
for ( i = 0; i < arr.length; i++) {
    if(arr[i] % 5 == 0) {
        s = s + arr[i];
    }
}
console.log(s);

console.log('****************');
//Tìm ra tích 3 số đầu của mảng array

var s3 = 0;
for (var i = 0; i < 3; i++) {
    s3 = s3 + arr[i];
}
console.log(s3);

console.log('****************');

//Tính tổng 3 phần tử cuối của mảng

var S = 0;
 for ( i = arr.length - 1; i > arr.length - 4; i-- ) {
   S = S + arr[i];
 }
 console.log(S);

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