const promise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;

    if (success) {
        resolve('Operation successful');
    } else {
        reject('Something went wrong');
    }
});

promise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});