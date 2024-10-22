//.Write a JavaScript program to print "Hello, World!" to the console
console.log("Hello, World!");

//How do you declare a variable in JavaScript?
let myVariable = "Hello!";

//Write an example to declare a variable for storing a user’s name. Write a JavaScript program that asks the user for their age using prompt(), and then prints whether they are eligible to vote (age >= 18)
let userName = prompt("Please enter your name:");
let userAge = prompt("Please enter your age:");
if (userAge >= 18) {
    console.log(`${userName}, you are eligible to vote.`);
} else {
    console.log(`${userName}, you are not eligible to vote.`);
}

//Given two numbers a and b, write a function addNumbers(a, b) that returns the sum of the two numbers.
function calc(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}
calc(5);


//Write a JavaScript program to calculate and print the factorial of a given number using a for loop.
let number = 5; 
console.log(`The factorial of ${number} is: ${calculateFactorial(number)}`);
