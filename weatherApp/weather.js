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
    });
});