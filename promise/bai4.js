
const promise = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve(2)
    }, 3000);
})
 .then(data => new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(data * 3)
        }, 2000);
    })
     .then(data => new Promise((resolve, reject) => {
            if (data > 10) resolve(true)
            reject(false)
     })
        .then(result => console.log(result))
        .catch(err => console.log(err))
    )
)
