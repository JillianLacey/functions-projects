// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(num1, num2) {
    // Your answer here
    if (num1 > num2) {
        return num1;
    } else if (num1 === num2) {
        return "they are equal";
    } else if (num1 < num2) {
        return num2;
    }
}

console.log("PROBLEM #1:: ", max(3, 2));


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(a, b, c) {
    // because it's a new function we can use different parameters (a,b,c instead of num1 and num2)
    return max(a, max(b, c));
    //first it executes b compared to c which are 2 and 12 and returns 12 (or c) and then gets compared to 3 (or a) and returns 12
}

console.log("PROBLEM #2:: ", maxOfThree(3, 2, 12));

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char) {
    // Your answer here
    //it looks inside the parenthesis of vowels and looks to see if it's a vowel
    if (char === ("a" || "e" || "i" || "o" || "u")) {
        return true;
    } else {
        return false;
    }
}

console.log("PROBLEM #3:: ", isVowel("c"));
// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function sum(num1, num2) {
    return num1 + num2;
}

console.log("PROBLEM #4:: ", sum(4, 5));


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg(a, b, c) {

    return (a + b + c) / 3;
}

console.log("PROBLEM #5:: ", avg(1, 2, 3));


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getLength(word) {
    return (word.length);

}

console.log("PROBLEM #6:: ", getLength("Jillian"));

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.


function greaterThan(a, b) {
    if (a < b) {
        return true;
    } else {
        return false;
    }
}

console.log("PROBLEM #7:: ", greaterThan(5, 12));



// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.


function great(name) {
    return ("Hello, " + name + "!");
}

console.log("PROBLEM #8:: ", great("Jill"));


// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.


function madLib(noun, adjective, verb, place) {
    // return ("These mad libs " + noun + " are " + adjective + " and great to " + verb + " at the " + place);
    return `These mad libs ${noun} are ${adjective} and great to ${verb} at the ${place}`;
}

console.log("PROBLEM #9:: ", madLib("activities", "fun", "learn", "Iron Yard."));