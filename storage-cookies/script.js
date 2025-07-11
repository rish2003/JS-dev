// localStorage -> aapke browser ke andar data store karna
// jo ki browser ke band hone par bhi delete nahi hoga

// sessionStorage -> stores data temporarily mtlb ki tab band hua aur data gaya

// cookies -> ye bhi data store krta hai and aapka data
// browser ke cookies naam ki property mei save hota hai
// and ye cookies concept kam data ya light data ke liye
// hota hai


// localStorage -> 1. store krna 2. fetch krna 3. remove krna 4. update krna 
// localStorage mei you cant store anything other than string
// so use JSON.stringify() to convert array and object into string
// to get them back as array or object use JSON.parse();

localStorage.setItem("name", "rishabh");
localStorage.getItem("name");
localStorage.removeItem("name");
localStorage.clear();

// sessionStorage

sessionStorage.setItem("name", "rishabh");
sessionStorage.getItem("name");
sessionStorage.removeItem("name");
sessionStorage.clear();

//cookies -> will store light data and on page refresh will hit the server with your data









