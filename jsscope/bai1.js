// for(var i = 0; i < 10 ; i++){

// }

// console.log(i)

// Kết quả sẽ bằng 10, vì var không được hỗ trợ trong block scope nên ( biến i được lưu trữ global scope )
// sau khi i = 10 không thỏa mãn điều kiện i < 10 vòng lặp kết thúc, biến i đươc lữu trữ ở global scope nên khi
// console.log biến i ta nhận kết quả bằng 10

// for(let i = 0; i < 10 ; i++){

// }

// console.log(i)
// như đã nói ở trên var không được hỗ trợ block scope, vì thế từ phiên bản ES6 thì let và const đã được giới thiệu
// lúc này khi console.log(i) trình duyệt sẽ báo lỗi i is not defined, vì i chỉ tồn tại trong block của vòng lặp for,
// đồng thời let cũng không cho redeclaring, ngược với var giống ví dụ dưới đ

var number = 30;
var number = 'số 30';
console.log(number);

const object ={
    name: 'nodemy'
}  

object.name = 'YA';
console.log(object);

// không thể gán lại được object = 'nodemy' được, vì const không cho phép gán lại giá trị
// có thể gán lại name = 'YA', vì việc sử dụng const để khai báo chỉ ngăn chặn gán lại định danh biến,
// vì thế các đối tượng (mảng) được gán cho biến sử dụng const vẫn có thể thay đổi