export const GET_MOVIES_BY_TITLE = 'GET_MOVIES_BY_TITLE';
export const GET_LATEST_MOVIES = 'GET_LATEST_MOVIES';
export const GET_TOP_20_MOVIES = 'GET_TOP_20_MOVIES';

export const fetchMoviesByTitle = (query) => (dispatch) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=17dadb414883c56a000864669faba791&query=${query}`, {
        method: "GET"
    }).then(response => {
        response.json()
            .then(data => {
                dispatch({
                    type: GET_MOVIES_BY_TITLE,
                    payload: data.results
                });
            });
    }).catch((error) => console.log(error));
};

export const fetchLatestMovies = () => (dispatch) => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=17dadb414883c56a000864669faba791&page=1', {
        method: 'GET'
    }).then(response => {
        response.json()
            .then(data => {
                dispatch({
                    type: GET_LATEST_MOVIES,
                    payload: data.results
                });
            });
    }).catch((error) => console.log(error));
}

export const getTopRatedMovies = () => (dispatch) => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=17dadb414883c56a000864669faba791&page=1', {
        method: 'GET'
    }).then(response => {
        response.json()
            .then(data => {
                dispatch({
                    type: GET_TOP_20_MOVIES,
                    payload: data.results
                });
            });
    }).catch((error) => console.log(error));
}

