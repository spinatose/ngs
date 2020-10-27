// Print "Hello World"
// Every second
// And stop after 5 times
let iterations = 0 ;
let timerid = setInterval(() => { 
    console.log("Hello World"); 
    iterations++; 
    if(iterations === 5) { 
        clearInterval(timerid); 
        console.log("Done!!") ;
    }
}, 1000) ;

// After 5 times. Print "Done" and let Node exit.
