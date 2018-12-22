const apiKey = 'fec8b5ab27b292a68294261bb21b04a5';
// All api calls go to the this link. found in the API docs
const apiBaseUrl = 'http://api.themoviedb.org/3';
// All images use this link. also found in API documentation
const imageBaseUrl = 'http://image.tmdb.org/t/p/';

const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`
$.getJSON(nowPlayingUrl,(movieData)=>{
    console.log(movieData);
    movieData.results.forEach((movie)=>{
        const posterURL = `${imageBaseUrl}w300${movie.poster_path}`
        const newHTML = `
            <div class="col-4">
                <img src ="${posterURL}"/>
                ${movie.title}
                </div>`
            $('#movie-grid').append(newHTML);

    })
})

$('#movie-form').submit((event)=> {
    //stops the browser from going forward
    event.preventDefault(); 
    const movieSearch = $('#search-input').val();
    //store the movie for later (local storage)
    localStorage.setItem('movieList', movieSearch)
    console.log(movieSearch)
    const searchUrl = `${apiBaseUrl}/search/movie?api_key=${apiKey}&query=${movieSearch}`
    console.log(searchUrl)
    let newHTML = '';
    $.getJSON(searchUrl, (movieData)=>{
        movieData.results.forEach((movie) => {
            const posterUrl = `${imageBaseUrl}w300${movie.poster_path}`
            newHTML += `
            <div class="col-3">
                <img src="${posterUrl}"/>
            </div> `
    })
    $('#movie-grid').html(newHTML)
    
    })
})
