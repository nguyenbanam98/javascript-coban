const time = Date.now();

const promise1 = function () {
   return new Promise ((resolve, reject) => {
       setTimeout(function() {
           resolve(2)
           console.log(`Promise1 done: ${Date.now() -time}s`);
       }, 3000);
   })
}
const promise2 = function (value) {
   return new Promise ((resolve, reject) => {
       setTimeout(function() {
           resolve(value * 3)
           console.log(`Promise2 done: ${Date.now() -time}s`);
       }, 2000);
   })
}
const promise3 = function (value) {
   return new Promise ((resolve, reject) => {
      if (value > 10) resolve(true)
      reject(false)
   })
}
async function run() {
    const num1Promise = promise1();
    const num2Promise = promise2(num1Promise)

    const num2 = num2Promise;
    try {
        const num3Promise = promise3(num2)
        const num3 = num3Promise;
        return num3
        
    } catch (error) {
        throw error;
    } 
}
run()
    .then(res => console.log(res))
    .catch(err => console.log(err))

// const promise3 = function (value) {
//     return new Promise ((resolve, reject) => {
//         if (value > 10) resolve(true)
//         reject(false)
//     }).then(data => data)
//       .catch(err => err)
//     }
//     async function run() {
//         const num1 = await promise1()
//         const num2 = await promise2(num1)
//         const num3 = await promise3(num2)
    
//         console.log(num3 + ` - ${Date.now() - time}s`);
        
// }
// run();