//---------question-1-------
// var city = prompt("Enter your city name:");
// if (city == "Karachi") {
//     document.write("Welcome to city of lights");
// }

//---------question-2-------
// var gender = prompt("Enter your gender:");

// if (gender == "male") {
//     document.write("Good Morning Sir");
// }
// if (gender == "female") {
//     document.write("Good Morning Ma'am");
// }

//---------question-3-------
// var color = prompt("Enter traffic signal color:");

// if (color == "Red") {
//     document.write("Must Stop");
// }
// if (color == "Yellow") {
//     document.write("Ready to move");
// }
// if (color == "Green") {
//     document.write("Move now");
// }

//---------question-4-------
// var fuel = prompt("Enter remaining fuel in litres:");
// if (fuel < 0.25) {
//     document.write("Please refill the fuel in your car");
// }

//---------question-5-------
// 1
var a = 4;

if (++a === 5) {
    alert("given condition for variable a is true");
}
// 2
var b = 82;

if (b++ === 83) {
    alert("given condition for variable b is true");
}
// 3
var c = 12;

if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
// 4
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
// 5
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
// 6
if ("car" < "cat") {
    alert("car is smaller than cat");
}

//---------question-6-------
// var subject1 = +prompt("Enter marks of subject 1:");
// var subject2 = +prompt("Enter marks of subject 2:");
// var subject3 = +prompt("Enter marks of subject 3:");

// var totalMarks = +prompt("Enter total marks:");

// var marksObtained = subject1 + subject2 + subject3;

// var percentage = (marksObtained / totalMarks) * 100;

// var grade;
// var remarks;

// if (percentage >= 80) {
//     grade = "A+";
//     remarks = "Excellent";
// }
// else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
// }
// else if (percentage >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
// }
// else if (percentage >= 50) {
//     grade = "C";
//     remarks = "You need to improve";
// }
// else if (percentage >= 40) {
//     grade = "D";
//     remarks = "You need to improve";
// }
// else {
//     grade = "F";
//     remarks = "Sorry";
// }
// document.write("<h1>Marks Sheet</h1>");
// document.write("<br>Total marks : " + totalMarks);
// document.write("<br>Marks obtained : " + marksObtained);
// document.write("<br>Percentage : " + percentage + "%");
// document.write("<br>Grade : " + grade);
// document.write("<br>Remarks : " + remarks);

//---------question-7-------
// var secretNumber = 7;
// var userGuess = +prompt("Guess the secret number (1 to 10):");

// if (userGuess === secretNumber) {
//     alert("Bingo! Correct answer");
// } else if (userGuess + 1 === secretNumber) {
//     alert("Close enough to the correct answer");
// }

//---------question-8-------
// var number = +prompt("Enter a number:");

// if (number % 3 === 0) {
//     alert("The number is divisible by 3");
// }

//---------question-9-------
// var number = +prompt("Enter a number:");

// if (number % 2 === 0) {
//     alert("The number is even");
// } else {
//     alert("The number is odd");
// }

//---------question-10-------
// var temperature = +prompt("Enter temperature:");

// if (temperature > 40) {
//     alert("It is too hot outside.");
// } else if (temperature > 30) {
//     alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//     alert("Today's Weather is cool.");
// } else if (temperature > 10) {
//     alert("OMG! Today's weather is so Cool.");
// }

//---------question-11-------
// var firstNumber = +prompt("Enter first number:");
// var secondNumber = +prompt("Enter second number:");
// var operation = prompt("Enter operation (+, -, *, /, %):");

// if (operation === "+") {
//     alert(firstNumber + secondNumber);
// } else if (operation === "-") {
//     alert(firstNumber - secondNumber);
// } else if (operation === "*") {
//     alert(firstNumber * secondNumber);
// } else if (operation === "/") {
//     alert(firstNumber / secondNumber);
// } else if (operation === "%") {
//     alert(firstNumber % secondNumber);
// } else {
//     alert("Invalid operation");
// }