// jsPractice

// Exercises:

// 1.Given a number between 0 and 6 representing the days of the week, print "Go to work." 
// if it's a work day and "Sleep in." if it's a weekend day.You can set up an array for the days of the week, 
// or for extra credit, you can check out the JS Date object here.

var daysOfWeek = [0, 1, 2, 3, 4, 5, 6]
function days(num) {
    if (num == 0 || num == 1 || num == 2 || num == 3 || num == 4) {
        console.log("Go to work!")
    } else {
        console.log("Sleep in!")
    }
}

days(4);


// 2. Given a month number, between 1 and 12, and a year, print the number of days in that month - accounting for leap years.

var monthNum = parseInt(prompt("Enter a month number from 1-12: "))
var yearNum = parseInt(prompt("Type in a year: "))

function numOfDays(monthNum, yearNum) {
    if( monthNum == 4 || monthNum == 6 || monthNum == 9 || monthNum == 11) {
        console.log("There are 30 days in this month.")
    } else if (monthNum == 1 || monthNum == 3 || monthNum == 5 || monthNum == 7 || monthNum == 8 || monthNum == 10 || monthNum == 12 ) {
        console.log ("There are 31 days in this month!")
    } else if (monthNum == 2) {
        if (yearNum % 4 == 0 && yearNum % 100 != 0 || yearNum % 100 == 0 && yearNum % 400 == 0) {
            console.log("This month has 29 days!")
        } else if (monthNum == 2) {
            console.log("This month has 28 days!")
        }
    }
    else {
        console.log("Oops...")
        }
    }


numOfDays(monthNum, yearNum);

var sadFace = "😔 " 
// to get an emohi, hold: command + ctrl + space_bar

 
// 3. Given the amount of a bill as a number, and a level of service - which can be "good", "fair", or "bad", 
// print the total bill with the tip included.The amount of tip given for each level of service is defined by:

// "good" -> 20 %

// "fail" -> 15 %

// "bad" -> 10 %

function tipCalc(service, total) {
    var tipAmount;
    var newTotal;
    if (service == "good") {
        tipAmount = Math.floor((total * 0.20) * 100 ) / 100;
    } else if (service == "fair") {
        tipAmount = total * 0.15;
    } else if (service == "bad") {
        tipAmount = total * 0.10; 
    } else {
        console.log("Enter service and total!");
        return;
    }
}   newTotal = tipAmount + total;
    newTotal = newTotal * 100;
    newTotal = Math.ceil(newTotal);
    newTotal = newTotal / 100;
    console.log("$" + newTotal);

tipCalc("good", 21.89);

// a much more CONCISE way of thinking about this...
var tipAmounts = {
    poor: 0.1,
    fair: 0.15,
    good: 0.2
}

console.log((total * tipAmounts[service]) + total)

//     Extra: Add to "Tip Calculator"...you are also given the number of people to divide the total into.Print the amount for each person to pay.