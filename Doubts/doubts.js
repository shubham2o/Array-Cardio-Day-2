// Splice() Method
const fruits = ["Banana", "Orange", "Apple", 'Mango'];

// EXAMPLE 1
document.getElementById("splice1").innerHTML = fruits;

fruits.splice(2, 0, "Lemon", "Kiwi");
document.getElementById("splice2").innerHTML = fruits;


// EXAMPLE 2
document.getElementById("splice3").innerHTML = fruits;

fruits.splice(2, 2);
document.getElementById("splice4").innerHTML = fruits;


// EXAMPLE 3
document.getElementById("splice5").innerHTML = fruits;

fruits.splice(2, 1, "Lemon", "Kiwi");
document.getElementById("splice6").innerHTML = fruits;