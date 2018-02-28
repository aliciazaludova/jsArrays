console.log("arrays.js");

var test1 = "cat"; // console true if palindrome
var splitupChars = test1.split('');
    console.log(splitupChars); 

var reverseSplitupChars = splitupChars.reverse();
    console.log(reverseSplitupChars);

var joined = reverseSplitupChars.join('');
console.log(joined);

if (joined === test1) {
    console.log(true);
} else {
    console.log(false);
}

// do later -- other words, including:
// var test2 = "racecar";
// var opp2 = 

// zoe's solution writes it in one line 
// var opp = test.split('').reverse().join('');

var animals = ['fish', 'dog', 'cat'];
var animalzElement = document.getElementById('animalz');
for (var i = 0; i<animals.length; i++) {
    animalzElement.innerHTML += '<h5>' + animals[i] + '</h5>';
}

// challenge 2

var book1 = "Catch 22";
var book2 = "Slaughterhouse 5";
var book3 = "Fahrenheit 451";

var booksAll = [book1, book2, book3];

for (var i = 0; i < booksAll.length; i++) {
    console.log(booksAll[i].split(' ').pop())
}

// zoe's solution:
var book = "Catch 22";
var bookSplit = book.split(''); // this makes two array items of Catch and 22
var realNumz = [];
    for (var j = 0; j < bookSplit.length; j++);
    if(bookSplit[j]*1) {
        realNumz.push(bookSplit[j]);
    }
console.log("answer:", realNumz.join(" "));


// i started with this -----------------
// var replaceWords = book1.replace("Catch", '');
// console.log(replaceWords);

// var replaceWords2 = book2.replace("Slaughterhouse 5", '');
// console.log(replaceWords);

// var replaceWords2 = book2.replace("Fahrenheit 451", '');
// console.log(replaceWords);
