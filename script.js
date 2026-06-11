let movies = [];


const addMovie = () => {

    const title =
        document.getElementById("title").value.trim();

    const genre =
        document.getElementById("genre").value.trim();

    const rating = Number(
        document.getElementById("rating").value
    );

    if (
        title === "" ||
        genre === ""
    ) {
        alert("Please fill all fields");
        return;
    }

    if (
        isNaN(rating) ||
        rating < 1 ||
        rating > 10
    ) {
        alert("Rating must be between 1 and 10");
        return;
    }

    const movie = {
        title,
        genre,
        rating
    };

    movies.push(movie);

    displayMovies();

    
    document.getElementById("title").value = "";
    document.getElementById("genre").value = "";
    document.getElementById("rating").value = "";
};


const displayMovies = () => {

    const movieList =
        document.getElementById("movieList");

    movieList.innerHTML = "";

    movies.forEach((movie, index) => {

        movieList.innerHTML += `
            <div class="movie">
                <h3>${index + 1}. ${movie.title}</h3>
                <p>Genre: ${movie.genre}</p>
                <p>Rating: ${movie.rating}/10</p>
            </div>
        `;
    });
};


const startWatching = () => {

    if (movies.length < 3) {
        alert("Please add at least 3 movies");
        return;
    }

    displayCurrentMovie();

    document.getElementById("playBtn").disabled = false;
    document.getElementById("pauseBtn").disabled = true;
    document.getElementById("watchBtn").disabled = true;
};

const displayCurrentMovie = () => {

    const currentMovie =
        document.getElementById("currentMovie");

    if (movies.length === 0) {

        currentMovie.innerHTML = `
            <h2>🎉 All Movies Watched!</h2>
        `;

        document.getElementById("playBtn").disabled = true;
        document.getElementById("pauseBtn").disabled = true;
        document.getElementById("watchBtn").disabled = true;

        return;
    }

    const movie = movies[0];

    currentMovie.innerHTML = `
        <h2>${movie.title}</h2>
        <p>Genre: ${movie.genre}</p>
        <p>Rating: ${movie.rating}/10</p>
    `;
};


const playMovie = () => {

    document.getElementById("playBtn").disabled = true;

    document.getElementById("pauseBtn").disabled = false;
};


const pauseMovie = () => {

    document.getElementById("pauseBtn").disabled = true;

    document.getElementById("watchBtn").disabled = false;
};


const watchMovie = () => {

    if (movies.length === 0) {
        return;
    }

    const watchedMovie = movies[0];

    alert(`${watchedMovie.title} watched successfully 🎉`);

    movies.shift();

    displayMovies();

    displayCurrentMovie();

    if (movies.length > 0) {

        document.getElementById("playBtn").disabled = false;
        document.getElementById("pauseBtn").disabled = true;
        document.getElementById("watchBtn").disabled = true;

    } else {

        document.getElementById("playBtn").disabled = true;
        document.getElementById("pauseBtn").disabled = true;
        document.getElementById("watchBtn").disabled = true;
    }

};