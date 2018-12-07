// DOM Manipulation Basics! DOM manipulation allows JS to add  behavior/interactivity to your website!

console.log(document);
console.dir(document);

var simpleDoc = {
    children: [
        {
            tag: "<HTML>",
            children: [
                {
                    tag: "<head>"
                },
                {
                    tag: "body"
                }

            ]
        }
    ]
}

simpleDoc.children[0].children[1]

// SAVIOR: "get element by ID" or "get elementS by class"
// *** it's preferable to use IDs in your html if you want to access it via the DOM because 
// the "get elements by class" will return an array of elements that match the class...

// to access the Document you must use the word "document". see below -->

var adam = document.getElementById("adamsDiv")
console.log(adam)

console.dir(adam)
adam.innerHTML = "I just changed this text"

adam.style.backgroundColor = "pink"

// var newImage = document.createElement("img");
// newImage.src = "http://placehold.it/300x300"
// document.getElementById("adamsDiv").appendChild(newImage);

//an easier way to do what we did in the previous 3 lines (using a template literal!):
adam.innerHTML += `
    <img src="https://placehold.it/200x200" />
`

prompt("I am a prompt. what are you?")
// a way to get and capture data from the user!

varNum = +prompt("Enter a number: ")
// the + sign before the prompt will convert the response to a number data type. parseInt() and Number() will too, but + is way shorter!