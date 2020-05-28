var phucBirthday = '26-11-1992';
var cuongBirthday= '27-11-1994';

function convertDate(date) {
    var arrDate = date.split('-');
    return arrDate[2] + '-' + arrDate[1] + '-' + arrDate[0];
}
console.log(convertDate(phucBirthday));
console.log(convertDate(cuongBirthday));

phucBirthday = new Date(convertDate(phucBirthday));
cuongBirthday = new Date(convertDate(cuongBirthday));

console.log(phucBirthday);
console.log(cuongBirthday);


if (phucBirthday < cuongBirthday) {
    console.log('Phúc lơn tuổi hơn Cường');
} else if (phucBirthday > cuongBirthday) {
    console.log('Cường lớn tuổi hơn Phúc');
} else console.log('Hai người bằng tuổi nhau');


function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
console.log(addDays(phucBirthday, 100));

var weekday = addDays(phucBirthday, 100).getDay();

switch (weekday) {
    case 0:
      console.log('Chủ nhật');
      break;
    case 1:
      console.log('Thứ 2');
      break;
    case 2:
      console.log('Thứ 3');
      break;
    case 3:
      console.log('Thứ 4');
      break;
    case 4:
      console.log('Thứ 5');
      break;
    case 5:
      console.log('Thứ 6');
      break;
    case 6:
      console.log('Thứ 7');
      break;
   
    default:
      console.log(`${weekday} không xác định.`);
  }