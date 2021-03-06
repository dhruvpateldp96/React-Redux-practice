import { LOADING, CREATE_CONTACT, MODAL_STATE, DELETE_CONTACT } from './types';
import axios from 'axios';

// import { APIKey } from '../../../movies-series-info/src/APIKey';

// const dispatch = useDispatch()

export const createContact = (formData) => {
  return {
    type: CREATE_CONTACT,
    payload: formData
  };
};

export const deleteContact = (phone) => {
  return {
    type: DELETE_CONTACT,
    payload: phone
  };
};

export const changeModalState = () => {
  return {
    type: MODAL_STATE,
  };
};


// export const fetchMovies = (text) => {
//   return (dispatch) => {
//   return axios
//     .get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
//     .then(response =>
//       dispatch({
//         type: FETCH_MOVIES,
//         payload: response.data
//       })
//     )
//     .catch(err => console.log(err));
//   };
// };

// export const fetchMovie = (id) => {
//   return (dispatch) => {
//     return axios
//     .get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
//     .then(response =>
//       dispatch({
//         type: FETCH_MOVIE,
//         payload: response.data
//       })
//     )
//     .catch(err => console.log(err));
//     };
// };

export const setLoading = () => {
  return {
    type: LOADING
  };
};
