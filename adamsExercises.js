// # problem-solving with code!

// Given an array of people’s names[“Lachlan”, “Kim”, “Moira”], write a function that logs “Hi, [name]!” for each person.
// function iterate(array) {
//     for (var i = 0; i < array.length; i++) {
//         var currentItem = array[i];
//         // use currentItem here
//     }
// } 

var names = ["Lachlan", "Kim", "Moira"]

function sayHi(array) {
    for (var i = 0; i < array.length; i++) {
        var currentName = array[i];
        console.log("Hi, " + currentName + "!")
    }
}

sayHi(names)

// Given an array of a first, middle, and last name[“Adam”, “Michael”, “Szaruga”], write a function that prints the person’s initials
// function accumulate(array) {
//     var count = “”;

//     for (var i = 0; i < array.length; i++) {
//         var currentItem = array[i];
//         count += currentItem;
//     }

//     return count;
// }

var fullName = ["Adam", "Michael", "Szaruga"]

function initials(array) {
    var nameInits = ""
    for (var i = 0; i < array.length; i++) {
        var firstInit = array[i][0];
        nameInits+= firstInit
    }
    console.log(nameInits);
}

initials(fullName);

// Given a list of 0’s and 1’s, [0, 1, 0, 1, 1, 1, 0, 0], write a function that returns the index of the last 1 in the array
// function search(haystack, needle) {
//     var foundIndex = -1;

//     for (var i = 0; i < haystack.length; i++) {
//         var currentItem = haystack[i];
//         if (currentItem == needle) {
//             foundIndex = i;
//         }
//     }

//     return foundIndex;
// } 


var binaries = [0, 1, 0, 1, 1, 1, 0, 0]
// does the -1 move the search backwards through the array then? it must... 
//is there another way to search the last item index?
function printLast(haystack, needle) {
    var foundIndex = -1;
    for (var i = 0; i < haystack.length; i++) {
        var currentItem = haystack[i];
        if (currentItem == needle) {
            foundIndex = i;
        }
    }
    return foundIndex;
}

console.log(printLast(binaries, 1))

// Given a list of positive numbers, [1, 5, 25, 3, 99, 20], write a function that returns the biggest number

var posNums = [1, 5, 25, 3, 99, 20];

function biggestNumber(array) {
    biggestNum = 0;
    for (var i = 0; i < array.length; i++) {
        currentNum = array[i]
        if (currentNum > biggestNum) {
            biggestNum = currentNum;
        }
    }
    return biggestNum
}

console.log(biggestNumber(posNums))

// Given an array of student’s birth years, [1991, 1984, 1984, 1989], return the most common birth year

var birthYears = [1979, 1984, 1991, 1983, 1991, 1984, 1989, 1990, 1988, 1986, 1984];

function commonYear(array) {
    var mostCommonYear = {};
    for (var i = 0; i < array.length; i++) {
        var currentYear = array[i];
        if (!mostCommonYear[currentYear]) {
            mostCommonYear[currentYear] = 0;
        }
        mostCommonYear[currentYear]++
    }
    return mostCommonYear;
}


// var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// var mf = 1;
// var m = 0;
// var item;
// for (var i = 0; i < arr1.length; i++) {
//     for (var j = i; j < arr1.length; j++) {
//         if (arr1[i] == arr1[j])
//             m++;
//         if (mf < m) {
//             mf = m;
//             item = arr1[i];
//         }
//     }
//     m = 0;
// }
// console.log(item + " ( " + mf + " times ) ");

var birthYears2 = [1979, 1984, 1991, 1983, 1991, 1984, 1989, 1990, 1988, 1986, 1984];

// function mostCommonYear(list) {
//     var mostCommon;
//     var yearCount = 1
//     var yearCounter = 0
//     for (var i = 0; i < list.length; i++) {
//         for (var j = 0; j < list.length; j++){
//             if (list[i] == list[j]) {
//                 yearCounter++;
//             if (yearCounter < yearCount) {
//                 yearCount = yearCounter;
//                 mostCommon = list[i]
//             }
//         }
//     }
//     yearCount = 0;  

// }
//     console.log(mostCommon) 
// }

// mostCommonYear(birthYears2)

// // Given a string “This is a random string”, write a function that returns a count of each character in the string

var string = "This is a random string";

function charCount(string) {
    var characters = {};
    for (var i = 0; i < string.length; i++) {
        var currentChar = string[i];
        if (!characters[currentChar]) {
            characters[currentChar] = 0;
        }
        characters[currentChar]++
    }
    return characters;
}

console.log(charCount(string));

// // Given an array of olympic race results[{ country: “usa”, time: 233 }, { country: “poland”, time: 222 }, … ], write a function that returns each country’s best time

// var olympicResults = [
//     {
//         country: "usa",
//         running: 200,
//         swimming: 212,
//         biking: 113
//     },
//     {
//         country: "poland",
//         running: 213,
//         swimming: 224,
//         biking: 250

//     },
//     {
//         country: "ecuador",
//         running: 199,
//         swimming: 230,
//         biking: 215
//     }
// ];

// function fastestTime(array) {
//     times = 0;
//     fastestTimes = {}
//     for (var i = 0; i < array.length; i++) {
//         currentTime = array[i]
//         if (currentTime > times) {
    
//         }
//     }
    
// }

// players[i].avgMinutesPlayed;

// // Given a list of numbers, [-1, 5, -25, -3, 99, 20], write a function that returns the count of positive numbers and negative numbers

var numList = [-1, 5, -25, -3, 99, 20, 13, 11, -4];
function posNegCounter(array) {
    posCount = 0;
    negCount = 0;
    for (var i = 0; i < array.length; i++) {
        currentNum = array[i];
        if (currentNum > 0) {
            posCount++
        } else {
            negCount++
        }
    }
    console.log(`Positives: ${posCount}, Negatives: ${negCount}`)
}

posNegCounter(numList);

// Finding Unique Items in an Array:
// function unique(array) {
//     var object = {};

//     for (var i = 0; i < array.length; i++) {
//         var currentItem = array[i];
//         object[currentItem] = “blah”;
//     }

//     var uniqueItems = Object.keys(object);
//     return uniqueItems;
// } 
