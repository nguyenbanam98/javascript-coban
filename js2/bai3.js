// Bài 3

var person = [
    {
        name: 'Trung',
        class: 'Nodemy01',
        dateJoin: '05-02-2020',
        age: 20
    },
    {
        name: 'Phong',
        class: 'Nodemy01',
        dateJoin: '06-01-2020',
        age: 19
    },
    {
        name: 'Nam',
        class: 'Nodemy02',
        dateJoin: '25-01-2020',
        age: 20
    },
    {
        name: 'Luan',
        class: 'Nodemy02',
        dateJoin: '31-01-2020',
        age: 20
    }
];






person.sort((item1, item2) => item1.age - item2.age);

console.log(person);

function convertDate(dateString) {
    var arrDate = dateString.split('-');
    var date = arrDate[2] + '-' + arrDate[1] + '-' + arrDate[0];
    return new Date(date);
}



var sorted = person.sort((a, b) =>{
    var date1 = convertDate(a.dateJoin);
    var date2 = convertDate(b.dateJoin);
    return new Date(date1) - new Date(date2)
} );

console.log(sorted);

var p = person.filter(item => {
    var date = convertDate(item.dateJoin);
    return date < new Date('02/01/2020')
});


console.log(p);

var arrNew = person.map(currentPerson => {
    currentPerson.name = currentPerson.name.toUpperCase();
    return currentPerson;
});
console.log(arrNew);