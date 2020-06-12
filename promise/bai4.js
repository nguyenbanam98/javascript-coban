const time = Date.now()
// const promise = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         resolve(2)
//     }, 3000);
// })
//  .then(data => new Promise((resolve, reject) => {
//         setTimeout(function () {
//             resolve(data * 3)
//         }, 2000);
//     })
//  .then(data => new Promise((resolve, reject) => {
//             if (data > 10) resolve(true)
//             reject(false)
//      })
//  .then(result => console.log(result))
//  .catch(err => console.log(err + ` mat ${Date.now() - time} s`))
//     )
// )
// Het 5s
const promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(2)
        }, 3000);
})
const promise2 = new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(3)
        },2000);
})
const promise3 = function(data) {
   return new Promise((resolve, reject) => {
        if ( data > 10) resolve(true)
        reject(false)
    })
} 

promise
 .then(value => promise2
 .then(value2 => value * value2))
 .then(data => promise3(data))
 .then(result => console.log(result))
 .catch(err => console.log(err + ` mat ${Date.now() - time} s`))
// Het 3s

 
 