import {
  FETCH_CALENDAR_DATA, 
  FETCH_CONTACTS_DATA, 
  FETCH_DROPBOX_DATA, 
  FETCH_SLACK_DATA, 
  FETCH_TWEET_DATA, 
  LOADING, 
  SEARCH_TERM } from '../actions/types';

const initialState = {
  text: '',
  calendar: [],
  contacts: [],
  dropbox: [],
  slack:[],
  tweet:[],
  filters: "",
  loading: false,
  // movie: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_TERM:
      return {
        ...state,
        filters: action.payload,
        loading: false
      };
    case FETCH_CALENDAR_DATA:
      return {
        ...state,
        calendar: action.payload,
        loading: false
      };
    case FETCH_CONTACTS_DATA:
      return {
        ...state,
        contacts: action.payload,
        loading: false
      };
    case FETCH_DROPBOX_DATA:
      return {
        ...state,
        dropbox: action.payload,
        loading: false
      };
    case FETCH_SLACK_DATA:
      return {
        ...state,
        slack: action.payload,
        loading: false
      };
    case FETCH_TWEET_DATA:
      return {
        ...state,
        tweet: action.payload,
        loading: false
      };
    // case FETCH_MOVIE:
    //   return {
    //     ...state,
    //     movie: action.payload,
    //     loading: false
    //   };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
