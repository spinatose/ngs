const theOneFunc = (arg) => { console.log(`Hello after ${arg} seconds...`)};

let duration = 4 ;

// Hello after 4 seconds
setTimeout(theOneFunc, duration * 1000, duration);

duration = 8
// Hello after 8 seconds
setTimeout(theOneFunc, duration * 1000, duration);

// You can define only ONE function
