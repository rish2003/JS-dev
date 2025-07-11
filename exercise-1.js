//promises and async JS 

//Task 1: promise with .then()

var ques1 = function delayedMessage() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("Message Received");
        }, 250);

    })
};

ques1().then((result) => {
    console.log(result);
});


//Task 2: Async/Await Fetch Simulation 

// Simulate a fetch function using setTimeout that resolves with a user object
// after 1.5 seconds. Use async/await to call it and log the user.

function fakeFetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: "Rishabh", age: 23 });
        }, 500);
    });
}

// TODO: Write an async function `getUser` that awaits fakeFetchUser() and logs it

async function getUser() {

    try {
        const result = await fakeFetchUser();
        console.log("result:", result);
    } catch (err) {
        console.error("error:", err);
    }
};

getUser();

//Task 3: Error Handling With Rejection

// Create a function `getWeather(city)`
// If city === "Delhi", resolve with "☀️ Sunny in Delhi"
// Else reject with "❌ Weather data not available"

// Then write an async function that calls getWeather and logs the result using try/catch.

function getWeather(city) {
    return new Promise((resolve, reject) => {
        if (city === "Delhi") {
            resolve("The weather is sunny");
        } else {
            reject("Weather Data Not available");
        }
    });
};

async function callGetWeather() {
    try {
        const result = await getWeather("Mumbai"); //For resolving will pass "Delhi"
        console.log(result);
    } catch (err) {
        console.error("Error:", err);
    }
};

callGetWeather();



//Task 4: Sequential Async Execution 

// Create two async functions: fetchUser and fetchPosts
// fetchUser resolves after 1s with "👤 User loaded"
// fetchPosts resolves after 1s with "📝 Posts loaded"

// Write an async function that calls them **in order**, and logs both results


async function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Users Fetched");
            resolve("User data here");
        }, 1000);
    });
}

async function fetchPosts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Posts Fetched");
            resolve("Post data here");
        }, 1000);
    });
}


// async function inOrderCall() {
//     try {
//         const Users = await fetchUser();
//         if (Users) {
//             const Posts = await fetchPosts();
//         }
//         console.log(Users);
//         console.log(Posts);
//     } catch (err) {
//         console.error("Error:", err);
//     }

// };

async function inOrderCall() {
    try {
        const Users = await fetchUser();   // waits 1 sec
        const Posts = await fetchPosts();  // waits another 1 sec
        console.log("Final Log:", Users, "|", Posts);
    } catch (err) {
        console.error(" Error:", err);
    }
}

inOrderCall();

//Task 5: Parallel Async Execution (Challenge)

// Modify Task 4 to run fetchUser and fetchPosts in parallel using Promise.all()
// Then log both results once both are complete


function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Users Fetched");
            resolve("User data here");
        }, 1000);
    });
}

function fetchPosts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Posts Fetched");
            resolve("Post data here");
        }, 1000);
    });
}

async function fetchBothInParallel() {
    try {
        // Start both in parallel and wait for both to finish
        const [Users, Posts] = await Promise.all([fetchUser(), fetchPosts()]);

        console.log("Final Result:");
        console.log("Users:", Users);
        console.log("Posts:", Posts);
    } catch (err) {
        console.error("Error:", err);
    }
}

fetchBothInParallel();
