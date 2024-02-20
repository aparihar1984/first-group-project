// Define constants for elements
const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const moviesContainer = document.getElementById('movies-container');
 
// Function to fetch movies based on search query
const fetchMovies = async (query) => {
    try {
        // Fetch movie data from OMDb API
        const response = await fetch(`http://www.omdbapi.com/?apikey=afd5cfe2&s=${query}`);
        const data = await response.json();
       
        // Check if data contains search results
        if (data.Response === "True") {
            displayMovies(data.Search);
        } else {
            console.error('Error fetching movies:', data.Error);
        }
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
};
 
// Function to display movies in the container
const displayMovies = (movies) => {
    // Clear previous search results
    moviesContainer.innerHTML = '';
 
    // Iterate over each movie and create a card for it
    movies.forEach((movie) => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <h2>${movie.Title}</h2>
            <p>Year: ${movie.Year}</p>
            <img src="${movie.Poster}" alt="${movie.Title}">
        `;
        moviesContainer.appendChild(movieCard);
    });
};
 
// Event listener for form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchTerm = input.value.trim();
    if (searchTerm !== '') {
        fetchMovies(searchTerm);
    }
});
