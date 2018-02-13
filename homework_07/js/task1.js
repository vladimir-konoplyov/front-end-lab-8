// Task1: Pyramid "building"

(function() {

// User set the number of floors for piramid   
var floor = Number(prompt('Enter natural number of piramid floor (from 1 to 20)'));
var piramid = "";

// Cheking input data
if (isNaN(floor) || floor % 2 !== 0 || floor <= 0 || floor > 20) {
    console.log('Incorrect data!');
} else {
// The number of iteration for piramid building are equal input "floor"
    for (var i = 0; i < floor; i++) {
        var space = "", vertex = "";
        // Output spaces for each floor
        for (var j = 0; j < floor - i; j++) { 
            space = space + "   " ;
        }
        // Output vertixes '[~]' for each floor
        for (var k = 0; k < 2 * i + 1; k++) {
         vertex = vertex + "[~]" ;
        }
        // Creating piramid    
        piramid = piramid + space + vertex + "\n";
    }
// Output piramid
console.log(piramid);
}

})();