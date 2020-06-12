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
    const num1 = await num1Promise
    const num2 = await num2Promise;
    const num3Promise = await promise3(num2)
    try {
       
        return await num3Promise
        
    } catch (error) {
        throw error;
    } 
}
run()
    .then(res => console.log(res))
    .catch(err => console.log(err + ` thuc hien: ${Date.now() - time}`))

