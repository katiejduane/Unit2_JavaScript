christmas = true;

function updateTimer() {
    var now = new Date();
    var nowAsTimeStamp = now.getTime();
    // console.log(nowAsTimeStamp);
    var timeRemaining = timeStamp - nowAsTimeStamp;
    console.log(timeRemaining)

    var seconds = Math.floor((timeRemaining / 1000) % 60);
    var minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
    var hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    var days = Math.floor((timeRemaining / (1000 * 60 * 60 * 24)) % 7);
    var weeks = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 7));

    document.getElementsByClassName('weeks')[0].innerHTML = weeks;
    document.querySelector('.days').innerHTML = days; 
    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.seconds').innerHTML = seconds;

    if(seconds === 0) {
        // update the DOM to say "Hooray! Another minute closer to christmas!"
        document.querySelector('.message').innerHTML = "Rickyyy!!! It's one minute closer to Christmas!"
    } else if (seconds >= 50) {
        document.querySelector('.message').innerHTML = "Rickyyy!!! It's one minute closer to Christmas!"
    } else {
        document.querySelector('.message').innerHTML = ""
    }

    if (seconds == 0 && christmas == false)
    {
        document.querySelector('.message').innerHTML = "GRADUATION!!!!!"
    } else if (seconds >= 50) {
        document.querySelector('.message').innerHTML = "GRADUATION!!!!!"
    } else {
        document.querySelector('.message').innerHTML = ""
    }

}

var endDate = new Date("December 25, 2018 00:00:00");
console.log(endDate);
var timeStamp = endDate.getTime();
// setInterval will call the function in arg 1 every arg2 milliseconds!
window.setInterval(updateTimer, 1000)


// ======================================================================================================================================== //

var endDate2 = new Date("March 15, 2019")
var timeStamp2 = endDate2.getTime();


var gradButton = document.getElementById("grad-button");
function Countdown() {
    if (christmas == true) {
        document.querySelector('body').style.background = "url('https://y.yarn.co/a657c98d-edb5-414f-b562-2c7a8484b18f_screenshot.jpg')"
        document.getElementById("countdown-banner").innerHTML = "Countdown to Graduation!"
        document.getElementById("grad-button").innerHTML = "Christmas!"
        timeStamp = timeStamp2
        christmas = false;
    } else {
        timeStamp = endDate.getTime();
        document.querySelector('body').style.background = "url('http://sfindie.com/wp-content/uploads/2018/08/better-off.jpg')"
        document.getElementById("countdown-banner").innerHTML = "Countdown to Christmas!"
        document.getElementById("grad-button").innerHTML = "Graduation!"
        christmas = true;
    }
   

}



gradButton.addEventListener("click", Countdown)
