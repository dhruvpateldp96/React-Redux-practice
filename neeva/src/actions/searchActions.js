import { FETCH_CALENDAR_DATA, FETCH_CONTACTS_DATA, FETCH_DROPBOX_DATA, FETCH_SLACK_DATA, FETCH_TWEET_DATA, LOADING, SEARCH_TERM } from './types';
import axios from 'axios';

// import { APIKey } from '../../../movies-series-info/src/APIKey';

// const dispatch = useDispatch()

export const searchTerm = (text) => {
  return {
    type: SEARCH_TERM,
    payload: text
  };
};

export const fetchCalendarData = () => {
  return (dispatch) => {
  return axios
    .get(`https://raw.githubusercontent.com/dhruvpateldp96/React-Redux-practice/master/neeva/json/acme-search/calendar.json`)
    .then(response =>
      dispatch({ 
        type: FETCH_CALENDAR_DATA,
        payload: response.data.calendar,
      })
    )
    .catch(err => console.log(err));
  };
};

export const fetchContactsData = () => {
  return (dispatch) => {
  return axios
    .get(`https://raw.githubusercontent.com/dhruvpateldp96/React-Redux-practice/master/neeva/json/acme-search/contacts.json`)
    .then(response =>
      dispatch({ 
        type: FETCH_CONTACTS_DATA,
        payload: response.data.contacts,
      })
    )
    .catch(err => console.log(err));
  };
};

export const fetchDropboxData = () => {
  return (dispatch) => {
  return axios
    .get(`https://raw.githubusercontent.com/dhruvpateldp96/React-Redux-practice/master/neeva/json/acme-search/dropbox.json`)
    .then(response =>
      dispatch({ 
        type: FETCH_DROPBOX_DATA,
        payload: response.data.dropbox,
      })
    )
    .catch(err => console.log(err));
  };
};

export const fetchSlackData = () => {
  return (dispatch) => {
  return axios
    .get(`https://raw.githubusercontent.com/dhruvpateldp96/React-Redux-practice/master/neeva/json/acme-search/slack.json`)
    .then(response =>
      dispatch({ 
        type: FETCH_SLACK_DATA,
        payload: response.data.slack,
      })
    )
    .catch(err => console.log(err));
  };
};

export const fetchTweetData = () => {
  return (dispatch) => {
  return axios
    .get(`https://raw.githubusercontent.com/dhruvpateldp96/React-Redux-practice/master/neeva/json/acme-search/tweet.json`)
    .then(response =>
      dispatch({ 
        type: FETCH_TWEET_DATA,
        payload: response.data.tweet,
      })
    )
    .catch(err => console.log(err));
  };
};

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

// export const setLoading = () => {
//   return {
//     type: LOADING
//   };
// };
