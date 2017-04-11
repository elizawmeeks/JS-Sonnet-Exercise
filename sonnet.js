console.log("hihi");

var sonnet = document.getElementById("sonnet").innerHTML;

var index = sonnet.indexOf("orphans");

console.log("Index of Orphans", index);

var length = sonnet.length;
console.log("Length of Sonnet", length);

// Paste the code below into your HTML file.
// Take the contents of the sonnet div and place it in a variable.
// Find and output the starting position of the word "orphans".
// Output the number of characters in the sonnet.
// Replace the first occurance of the string "winter" with "yuletide".

sonnet = sonnet.replace("winter", "yuletide");

console.log("replace winter", sonnet);

// Replace all occurances of the string "the" with "a large".

sonnet = sonnet.replace(/the /gi, "a large ");
console.log("replace all the 'the's", sonnet);

// Set the content of the sonnet div with the new string.

document.getElementById("sonnet").innerHTML = sonnet;