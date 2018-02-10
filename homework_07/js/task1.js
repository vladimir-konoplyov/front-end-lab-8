/* Task1: Pyramid "building" */

(function() {

/* User set the number of floors for piramid */    
var floor = parseInt(prompt('Enter natural number of piramida floor (from 0 to 20)'));
var piramid = [];

/* Cheking input data */
if (isNaN(floor) || floor < 0) {
    console.log('Incorrect data!');
}
/* The number of iteration for piramid building are equal input "floor" */
for (var i = 0; i < floor; i++) {
    var space = "", vertex = "";
/* Output spaces for each floor*/
for (var j = 0; j < floor - i; j++) { 
    space = space + "   " ;
}
/* Output vertixes '[~]' for each floor */
for (var k = 0; k < 2 * i + 1; k++) {
 vertex = vertex + "[~]" ;
}
piramid[i] = space + vertex;
}

/* Output piramid */
for (var x = 0; x < piramid.length; x ++) {
    console.log(piramid[x]);
}

})();