// scripts are here

// var number1;
// var number2;
// var number3;

// Checking number1 is bigger than number2
// EX JavaScript Conditions 1
function checkNumberSize() {
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;

    if (a > b) {
        alert(a + " is bigger than " + b);
    } else if (a < b) {
        alert(b + " is bigger than " + a);
    } else {
        alert("try again!");
    }
}


// Checking if sum of numbers is negative "-" or positive "+"
// EX JavaScript Conditions 2
function checkNumber() {
    var a = document.getElementById("number4").value;
    var b = document.getElementById("number5").value;
    var c = document.getElementById("number6").value;

    var sum = a + b + c;
    console.log(sum);

    if (sum < 0) {
        alert("sum is negative");
    } else {
        alert("sum is positive");
    }
}

// Set numbers in order decent
// EX JavaScript Conditions 3
function orderDecent() {
    var a = document.getElementById("number7").value;
    var b = document.getElementById("number8").value;
    var c = document.getElementById("number9").value;

    if (a > b && b > c && a > c) {
        alert("order is " + a + " " + b + " " + c);
    } else if (a > b && b < c && a > c) {
        alert("order is " + a + " " + c + " " + b);
    } else if (a > b && b < c && a < c) {
        alert("order is " + c + " " + a + " " + b);
    } else  {
        alert(" order is " + b + " " + a + " " + c);
    }
}

// Show the Highest number
// EX JavaScript Conditions 4
function numberHighest() {
    var a = document.getElementById("number10").value;
    var b = document.getElementById("number11").value;
    var c = document.getElementById("number12").value;
    var d = document.getElementById("number13").value;
    var e = document.getElementById("number14").value;

    if (a > b && a > c && a > d && a > e) {
        alert("Highest number is  " + a);
    } else if (b > a && b > c && b > d && b > e) {
        alert("Highest number is  " + b);
    } else if (c > a && c > b && c > d && c > e) {
        alert("Highest number is  " + c);
    } else if (d > a && d > b && d > c && d > e) {
        alert("Highest number is  " + d);
    } else {
        alert("Highest number is  " + e);
    }
}




// Show the class average
// EX JavaScript Conditions 5

studentScore = [66, 77, 77, 95, 99];

function studentAverage() {
var avg = (eval(studentScore.join('+')) / studentScore.length);
console.log(avg);

if (avg < 60 ) {
    alert("גרוע מאוד");
} else if (avg >=60 && avg < 70){
    alert("גרוע ");
} else if (avg >=70 && avg < 80){
    alert("בינוני ");
} else if (avg >=80 && avg < 90){
    alert("טוב ");
} else {
    alert("טוב מאוד");
}

}
// console.log(studentScore.length);
// console.log(studentScore);




