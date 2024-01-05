const BAERER_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2UzZWY1MzMwN2I5NGNiZjRkYTkzZjgxMmIyMmQ2MSIsInN1YiI6IjY1ODAwNTYzZGY4NmE4MDkzN2U3OWY5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pyN0ylXVd_G9_t26iEWYm4im-IG_rpEmlqDlPYDyqYA';

const BASE_URL = 'https://api.themoviedb.org/3';

const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

const url = 'https://api.themoviedb.org/3/search/movie?language=en-US';

const urlRated = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';



document.getElementById('ratedBtn').addEventListener('click', displayRated);

async function displayRated() {
    try {
        const response = await fetch(urlRated, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2UzZWY1MzMwN2I5NGNiZjRkYTkzZjgxMmIyMmQ2MSIsInN1YiI6IjY1ODAwNTYzZGY4NmE4MDkzN2U3OWY5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pyN0ylXVd_G9_t26iEWYm4im-IG_rpEmlqDlPYDyqYA'
            },
        });

        const data = await response.json();

        const containerRated = document.getElementById('mainContainer');
        containerRated.innerHTML = '';

        let arr = [data.results.length];


        for (let i = 0; i < 10; i++) {
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

    } catch (error) {
        console.error('Error fetching movies;', error);
    }
}


document.getElementById('popularBtn').addEventListener('click', displayPopular);

async function displayPopular() {
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2UzZWY1MzMwN2I5NGNiZjRkYTkzZjgxMmIyMmQ2MSIsInN1YiI6IjY1ODAwNTYzZGY4NmE4MDkzN2U3OWY5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pyN0ylXVd_G9_t26iEWYm4im-IG_rpEmlqDlPYDyqYA'
            },
        });

        const data = await response.json();

        const containerPopular = document.getElementById('mainContainer');
        containerPopular.innerHTML = '';

        let arr = [data.results.length];


        for (let i = 0; i < 10; i++) {
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

    } catch (error) {
        console.error('Error fetching movies;', error);
    }
}



const apiKey = "53e3ef53307b94cbf4da93f812b22d61";

document.getElementById("searchForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const searchInput = document.getElementById('searchInput').value.trim();
    const searchType = document.querySelector('input[name="searchType"]:checked').value;

    if (searchInput.trim() !== "") {
        searchMovieOrPerson(searchInput, searchType);
    }
});

async function searchMovieOrPerson(query, searchType) {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/search/${searchType}?api_key=${apiKey}&query=${query}`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2UzZWY1MzMwN2I5NGNiZjRkYTkzZjgxMmIyMmQ2MSIsInN1YiI6IjY1ODAwNTYzZGY4NmE4MDkzN2U3OWY5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pyN0ylXVd_G9_t26iEWYm4im-IG_rpEmlqDlPYDyqYA'
            },
        });
        const data = await response.json();

        const searchContainer = document.getElementById('mainContainer');
        searchContainer.innerHTML = '';

        _.each(data.results, result => {
            const resultCard = document.createElement('div');
            resultCard.classList.add('result-card');

            const imageMovie = document.createElement('img');
            if (searchType === 'movie') {
                imageMovie.src = result.backdrop_path ? `https://image.tmdb.org/t/p/w780${result.backdrop_path}` : 'https://via.placeholder.com/780x440  || ' - '';
                resultCard.appendChild(imageMovie);
            }

            const imageProfile = document.createElement('img');
            if (searchType === 'person') {
                imageProfile.src = result.profile_path ? `https://image.tmdb.org/t/p/w185${result.profile_path}` : 'https://via.placeholder.com/185x278  || ' - '';
                resultCard.appendChild(imageProfile);
            }

            const titleName = document.createElement('h3');
            titleName.textContent = result.title || result.name;

            const releaseKnown = document.createElement('p');
            if (searchType === 'movie') {
                releaseKnown.textContent = `Release Date: ${result.release_date || '-'}`;
            } else {
                releaseKnown.textContent = `${result.known_for_department || '-'}`;
            }

            const overviewKnownFor = document.createElement('p');
            if (searchType === 'movie') {
                overviewKnownFor.textContent = `Overview: ${result.overview || '-'}`;
            }

            const knownForList = document.createElement('ul');
            if (searchType === 'person') {
                overviewKnownFor.textContent = `Known For: ${_.pluck(result.known_for, 'title').join(', ') || '-'}`;
                /* _.each(person.known_for, knownForItem => {
                     const listItem = document.createElement('li');
                     const mediaType = knownForItem.media_type === 'movie' ? 'Movie' : 'TV Show';
                     listItem.textContent = `${mediaType}: ${knownForItem.title || knownForItem.name}`;
                     knownForList.appendChild(listItem);
                     */
            }



            resultCard.appendChild(titleName);
            resultCard.appendChild(releaseKnown);
            resultCard.appendChild(overviewKnownFor);
            resultCard.appendChild(knownForList);
            mainContainer.appendChild(resultCard);
        });
    } catch (error) {
        console.error("Error searching TMDB:", error);
    }
}


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


function removePrevSearchResult() {
    const containerEl = document.querySelector('#mainContainer');
    containerEl.innerHTML = '';

    const errorContainer = document.querySelector('#errorContainer');
    errorContainer.classList.add('hide');
}
