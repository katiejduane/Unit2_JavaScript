$('#weather-form').submit((e) => {
    e.preventDefault();
    // console.log("User submitted!")
    const zip = $('.zip-code').val();
    // console.log(zip);
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=imperial`;
    // we got the zip code
    // we built the URL.
    // GO GET THE JSON
    // $.getJSON, is shorthand for $.ajax
    // it expects 2 args:
    // 1. URL to fetch the JSON from
    // 2. the callback to run when the AJAX is back
    $.getJSON(weatherUrl, (weatherData) => {
        console.log(weatherData);
        const currTemp = weatherData.main.temp;
        const temps = {
            curr: weatherData.main.temp,
            max: weatherData.main.temp_max,
            min: weatherData.main.temp_min
        }
        const newHTML = `<img src="https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png" />
        <div>The temp in ${weatherData.name} is currently ${temps.curr} &deg;
        `
        $('.weather-data').html(newHTML);
        animateTemp(0, currTemp);
    });
});

const canvas = document.querySelector('#weather-canvas');
let context = canvas.getContext('2d');
let currentPercent = 0;

function animateTemp(currentArc, currentTemp) {
    context.lineWidth = 5;
    context.strokeColor = "ffff00";
    context.beginPath();
    context.fillStyle = "#ccc"
    context.arc(155, 75, 70, 0, Math.PI*2)
    context.closePath();
    context.fill();

    //Outer Line:
    context.beginPath();
    context.arc(155,75, 75, Math.PI*1.5, Math.PI * 2 * currentArc + Math.PI * 1.5)
    context.stroke();
    currentPercent++;

    //update the arc percentage until we hit currTemp
    if(currentPercent < currentTemp){
        //we need to keep drawing
        // requestAnimationFrame is like a while loop for canvas. it takes a function!
        requestAnimationFrame(()=>{
            animateTemp(currentPercent/100, currentTemp)
        })
    }
}