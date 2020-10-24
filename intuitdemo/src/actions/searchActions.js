import {  PUSH_PROJECT, PUSH_BIDS, LOADING, REMOVE_PROJECT,SHOW_BIDS } from './types';
import axios from 'axios';


export const pushProject = (project) => {
  return {
    type: PUSH_PROJECT,
    payload: project
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
// }


export const pushBids = (projectName, bid) => {
  return {
    type: PUSH_BIDS,
    projectName: projectName,
    bid: bid
  };
};


export const showBids = (projectName) => {
  return {
    type: SHOW_BIDS,
    projectName: projectName,
  };
};

export const removeProject = (projectName) => {
  return (dispatch) => {
    dispatch(showBids(projectName))
    dispatch({
      type: REMOVE_PROJECT,
      projectName: projectName,
    });
  }
 
};


export const setLoading = () => {
  return {
    type: LOADING
  };
};
