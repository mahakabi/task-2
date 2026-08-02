const promise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;

    if (success) {
        resolve('Operation successful');
    } else {
        reject('Something went wrong');
    }
});

async function run() {
    try {
        const result = await promise;
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

run();