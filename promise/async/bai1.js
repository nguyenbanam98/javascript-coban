const time = Date.now()
const num1 = new Promise ((resolve, reject) => {
    setTimeout(function() {
        resolve(1);
    }, 4000);
})
const num2 = new Promise ((resolve, reject) => {
    setTimeout(function() {
        resolve(2);
    }, 2000);
})
const num3 = new Promise ((resolve, reject) => {
    setTimeout(function() {
        resolve(3);
    }, 1000);
})
const num4 = new Promise ((resolve, reject) => {
    setTimeout(function() {
        resolve(4);
    }, 1000);
})
async function sequentialStart() {
    const run1 = await num1;
    console.log(`${run1} - ${Date.now() - time}s`);
    const run2 = await num3;
    console.log(`${run2} - ${Date.now() - time}s`);
    const run3 = await num4;
    console.log(`${run3} - ${Date.now() - time}s`);
    const run4 = await num2;
    console.log(`${run4} - ${Date.now() - time}s`);

}
sequentialStart()