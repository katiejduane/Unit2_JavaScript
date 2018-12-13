// Designed to simplfiy DOM tree traversal. BY AN RIT GRAD MY AGE!!! :D
// jQuery is a JS library. That means jQuery IS JS! jQuery canNOT live without JS!

// jQuery allows you to change stuff but doens't keep track of the changes. in a big app, this is confusing!!
// React, Angular,and Vue are the answer to this

// jQuery directly manipulates the DOM!
// This is expensivr, takes a lot of resources!
// React and others use "virtual DOM" which is efficient

// A $ means I'm writing JS, but not just any JS, I'm writing jQuery.
// console.log($);

// Targeting Stuff:
console.dir(document.querySelector('.container')) //using vanilla JS (one of 3ish ways to get this data)
console.dir($('.container')) //using jQuery
$('#row') //use CSS rules with jQuery
$('#row p') //this finds the row and then any <p> tag inside of it!


// Traversing the DOM:

//jQuery targets with CSS rules
//jQuery adds listeners as METHODS, ie click = .click()
//a listener takes 1 arg: code to run when event happens
$('#hide').click(function(){
    $('#thing').hide();
})

$('#show').click(function(){
    $('#thing').show();
})

$('#toggle').click(function() {
    $('#thing').toggle();
})

$('#html').click(function() {
    $('#thing').html("<p>newHTMLhere!</p>")
})

$('#text').click(function() {
    $('#thing').text("text change method")
})

$('#css').click(function() {
    // .css takes a JA object... key is a string for any css property, value is what you want to apply!
    $('#thing').css({
        "background-color": "green",
        "border-radius": "50%",
        "font-size": "100px"
    })
})

$('#add-class').click(function () {
    $('#thing').addClass('btn-danger')
})

$('#toggle-class').click(function () {
    $('#thing').toggleClass('btn-danger')
})

$('#remove-class').click(function () {
    $('#thing').removeClass('btn-danger')
})

$('#prepend').click(function () {
    $('#thing').prepend('boo!')
})

$('#append').click(function () {
    $('#thing').append('yah!')
})

$('#fade').click(function () {
    $('#thing').fadeToggle(1500)
})

$('#slide').click(function () {
    $('#thing').slideToggle(1500)
})

$('#animate').click(function () {
    $('#thing').animate({
        'background-color': 'orange',
        'height': '200px',
        'margin-left': '100px'
    },3000)
})

$('#goodbye').click(function () {
    $('#thing').animate({
        'margin-left': '10000px'
    }, 3000)
})

$('#hello').click(function () {
    $('#thing').animate({
        'margin-left': '100px'
    }, 3000)
})