'use strict';



function readLine() {
    return inputString[currentLine++];
}

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    let rad = readLine()
    const PI = Math.PI
    // Print the area of the circle:
    console.log(PI*rad*rad)
    // Print the perimeter of the circle:
    console.log(2*PI*rad)
    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}
