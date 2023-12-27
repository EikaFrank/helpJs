const BAERER_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2UzZWY1MzMwN2I5NGNiZjRkYTkzZjgxMmIyMmQ2MSIsInN1YiI6IjY1ODAwNTYzZGY4NmE4MDkzN2U3OWY5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pyN0ylXVd_G9_t26iEWYm4im-IG_rpEmlqDlPYDyqYA';

const BASE_URL = 'https://api.themoviedb.org/3';

const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

const url = 'https://api.themoviedb.org/3/search/movie?language=en-US';




function displayRated() {
    const rated = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2UzZWY1MzMwN2I5NGNiZjRkYTkzZjgxMmIyMmQ2MSIsInN1YiI6IjY1ODAwNTYzZGY4NmE4MDkzN2U3OWY5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pyN0ylXVd_G9_t26iEWYm4im-IG_rpEmlqDlPYDyqYA'
        }
    };

    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', rated)
        .then(function (response) { return response.json() })
        .then(function (data) {
            console.log(data)
            //.catch(error => console.error('Error:', error));
        });


    let arr = [data.results.length];


    for (let i = 0; i < [10]; i++) {


        let title = response.results[i].title;
        let release_date = response.results[i].release_date;
        let poster_pat = response.results[i].poster_path;
        card = document.createElement("div");

        let img = document.createElement("img");
        img.classList.add("card-img");
        img.src = IMG_URL + poster_pat;

        let movietitle = document.createElement("h3");
        movietitle.setAttribute("class", "card-title");
        movietitle.textContent = title;

        let released = document.createElement("h6");
        released.setAttribute("class", "card-title");
        released.textContent = "Released: " + release_date;

        card.append(img);
        card.append(title);
        card.append(released);
        mainContainer.append(card);

    };



};

document.getElementById('ratedBtn').addEventListener('click', displayRated);


//};



//popular
/*
const popular = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2UzZWY1MzMwN2I5NGNiZjRkYTkzZjgxMmIyMmQ2MSIsInN1YiI6IjY1ODAwNTYzZGY4NmE4MDkzN2U3OWY5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pyN0ylXVd_G9_t26iEWYm4im-IG_rpEmlqDlPYDyqYA'
    }
};

fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', popular)
    .then(function (response) { return response.json() })
    .then(function (data) {
        console.log(data)



        //.catch(err => console.error(err));
        let arr = [data.results.length];


        for (let i = 0; i < [10]; i++) {
            let title = data.results[i].title;
            let release_date = data.results[i].release_date;
            let poster_pat = data.results[i].poster_path;
            card = document.createElement("div");

            let img = document.createElement("img");
            img.classList.add("card-img");
            img.src = IMG_URL + poster_pat;

            let movietitle = document.createElement("h3");
            movietitle.setAttribute("class", "card-title");
            movietitle.textContent = title;

            let released = document.createElement("h6");
            released.setAttribute("class", "card-title");
            released.textContent = "Released: " + release_date;

            card.append(img);
            card.append(title);
            card.append(released);
            mainContainer.append(card);

        };

    });
*/
// .catch(err => console.error(err));





// search movie or person

const searchURL = BASE_URL + '/search/movie?' + BAERER_KEY;


function handleSubmit(event) {
    event.preventDefault();
    removePrevSearchResult();

    const searchTerm = document.querySelector('#searchInput').value.trim();
    const searchType = document.querySelector('input[type="radio"]:checked').value;

    fetchCountries(searchTerm, searchType)
        .then(displayCountries)
        .catch(displayError);
}








//error message
function displayError(error) {
    console.log(error);

    let message;
    if (error === '404 lang') message = `Can't find what you're looking for... try again.`;
    else if (error === '404 name') message = `Can't find what you're looking for... try again.`;
    else message = 'Something went wrong... wait for a bit and try again,';

    const errorMessageEl = document.querySelector('#errorMessage');
    errorMessageEl.innerText = message;

    const errorContainer = document.querySelector('#errorContainer');
    errorContainer.classList.remove('hide');
}


function createAndAppendElement(type, content, container) {
    const el = document.createElement(type);
    container.append(el);

    if (type === 'img') el.src = content;
    else el.innerText = content;

    return el;
}

function removePrevSearchResult() {
    const containerEl = document.querySelector('#mainContainer');
    containerEl.innerHTML = '';

    const errorContainer = document.querySelector('#errorContainer');
    errorContainer.classList.add('hide');
}
