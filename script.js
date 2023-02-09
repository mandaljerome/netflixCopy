
window.onload = () => {
  getOriginals();
  getTrendingNow();
  getTopRated();
};

function fetchMovies(url, dom_element, path_type) {

  url
    .then((response) => response.json())
    .then((data) => {
      showMovies(data.results, dom_element, path_type);
    });

  
}


showMovies = (movies, dom_element, path_type) => {
 

  
  console.log(movies);

  movies.forEach((data) => {
    document.querySelector(
      dom_element
    ).innerHTML += `<img src="https://image.tmdb.org/t/p/w500${data[path_type]}">`;
  });
 

 

  

  

 
};


function getOriginals() {

  const url = fetch(
    "https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213"
  );
  fetchMovies(url, ".original__movies", "poster_path");
}

function getTrendingNow() {
  const url = fetch(
    "https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045"
  );
  fetchMovies(url, "#trending", "backdrop_path");
}

function getTopRated() {
  const url = fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1"
  );
  fetchMovies(url, "#top_rated", "backdrop_path");
}




async function getMovieTrailer(id) {
  const url = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US`
  );
  return await url.json();
}


const setTrailer = (trailers) => {
  const iframe = null;

  const movieNotFound = null;


  if (trailers.length > 0) {

  } else {

  }
};
