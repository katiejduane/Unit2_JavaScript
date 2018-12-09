// JavaScript 101!

templateLiteral: `Hi! I'm adam!` 
// {(also called a string literal) the backticks `` make it a "supercharged" string, it can be broken in half, can be injected with ${variables}. 
// it can also be written into HTML!}


// Some OBJECT stuff...
// objects aren't ordered...

var k = "katie"

var adamsClass1 = {
    sean: "present",
    jimothy: "present",
    michael: "present",
    katie: "present"
}

adamsClass.sean; // present
adamsClass["jimothy"]; // present
adamsClass[michael]; // undefined (this word represents "nothingness")
adamsClass[k]; //present
adamsClass["k"] // undefined

// every key islready exists within dictionaries, except they are "undefined"

// ARRAYS
// the keys are 'IMPLIED' (their index/ORDER: 0, 1, 2, 3 etc...)

var adamsClass2 = ["Sean", "Jimothy", "Michael", "Katie"]
adamsClass2[0] // Sean
adamsClass[3] == "Katie" // true

// an example of an expression  (number operators)
var multiply = 2 * 2 // 4
// more operators: + add - subtract / divide * multiply % modulus (remainder)

// STRING operators
// + will concatenate
// .length will return thenumber of charatcers in a string
// .indexOf(sub) will return the index of a substring --> where does a given word starts
// a STRING is an ARRAY of single characters (adam said 3 times)

var concat = "helloworld"
concat.indexOf("world") // 5

// PEMDAS applies here more or less: JS looks for parentheses first

//"wait, is that how you spell world!? it looks so wierd to me now!"

//BOOLEAN operators
var bool = true;
var not = !bool; // false
var and = bool&&false; // false
var or = bool||false; // true
var equals = true == false; // false

//Array functions (prototype methods! there are tons listed and explained on MDN and W3schools)
myArray = []
myArray.push(4); // myArray = [4]
myArray.pop(); // myArray = []
myArray.length; // 0

// CONTROL FLOW STATEMENTS:
// --lines that change or CONTROL the flow of code execution
// "truthy" and "falsey" are JS concepts:
// ex: "a string" is truthy, but an empty string " " is falsey

//If-Else Conditional Statement
var adam = "teacher";

if (adam == "teacher") {
    console.log("hi");
} else if (adam == "bucket") {
    console.log("nope!");
} else {
    console.log("error");
}

// WHILE loops!
while( true ) {
    console.log(1+1);
}
//^infinite loop!

var counter = 0;
white(counter < 10) {
    console.log("i'm in a loop!")
    counter = counter + 1;
}

var string = ""
while(string != "aaaaa") {
    console.log(string)
    string = string + "a";
}

var array = [];
while(array.length < 5) {
    array.push("adam");
    console.log(array)
}

// FOR loops:
for (var i = 0; i < 10; i++) {
    console.log(i + ") i am in a while loop")
}

// FUNCTIONS!!! :D -->
function adamsFunc() {
    console.log("i'm inside of a function!")
}
//outside the function, call it!

adamsFunc();

anonymous functions
function () {
    console.log('anon')
}
// --->
var anonFunction = function() {
    console.log('anon');
}

var adamsArray = ["a", "b", "c", "d"];
var reversed = [];

while (adamsArray.length > 0) {
    var popped = adamsArray.pop();
    reversed.push(popped);
}
//or reversed.push(adamsArray.pop());
console.log(reversed)

Math.floor(4.2) // 4
Math.ceil(4.2) //5

var sadface = "😔 "
// to get an emoji, hold: command + ctrl + space_bar
