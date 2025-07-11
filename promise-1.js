//promise - an object, has 3 states 
//pending
//fulfilled
//rejected

const myPromise = new Promise((resolve, reject) => {

    var success = false;
    setTimeout(() => {
        if (success) {
            resolve("Data Received");
            // success = false;
        }
        else {
            reject("Something went wrong");
        }
    }, 1000);

});

myPromise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(error);
})


// async function will always return a promise 

var rish = async function greet() {
    return "Rishabh";
}

rish().then(console.log);


//await = pauses the execution of async func until promise is settled (resolved or rejected)

function fetchData() {
    return new Promise((resolve, reject) => {
        var success = true;
        setTimeout(() => {
            if (success) {
                resolve("Data Fetched");
            }
            else {
                reject("You f'ed up bro");
            }
        }, 5000);

    });
};


async function getData() {
    console.log("start");
    try {
        const result = await fetchData();
        console.log("Result:", result);
    } catch (err) {
        console.log("f'ed up vau", err);
    }

    console.log("end");
}

getData();

