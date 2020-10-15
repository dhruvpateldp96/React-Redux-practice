import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE_DETAILS, LOADING, SEATING } from './types';
import axios from 'axios';

// import { APIKey } from '../../../movies-series-info/src/APIKey';
  // http://www.omdbapi.com/?i=tt1178663

const APIKey = 'c951ff1'
// const dispatch = useDispatch()

// export const searchMovie = (text) => {
//   return {
//     type: SEARCH_MOVIE,
//     payload: text
//   };
// };

export const setSeating = (movieId, seatId) => {
  return {
    type: SEATING,
    seatId: seatId,
    movieId: movieId
  };
};



export const fetchMovies = (text) => {
  return (dispatch) => {
  return axios
    .get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
    .then(response => {
      // console.log(response.data);
      dispatch({
        type: FETCH_MOVIES,
        payload: response.data.Search
      })
    })
    .catch(err => console.log(err));
  };
};

export const fetchMovieDetails = (id) => {
  return (dispatch) => {
    return axios
    .get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
    .then(response =>{
      console.log(response.data);
      dispatch({
        type: FETCH_MOVIE_DETAILS,
        payload: response.data
      })
    }
    )
    .catch(err => console.log(err));
    };
};

export const setLoading = () => {
  return {
    type: LOADING
  };
};
