export const GET_MOVIES_BY_TITLE = 'Movies/GET_MOVIES_BY_TITLE';

export const fetchLatestMovies = (query) => (dispatch) => {
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