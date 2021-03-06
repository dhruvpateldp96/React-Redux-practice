import {
  // SEARCH_MOVIE,
  // FETCH_MOVIES,
  // FETCH_MOVIE,
  DELETE_CONTACT,
  MODAL_STATE,
  CREATE_CONTACT,
  LOADING
} from '../actions/types';

const initialState = {
  text: '',
  contacts: [],
  loading: false,
  modalState: false,
  // movie: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    // case SEARCH_MOVIE:
    //   return {
    //     ...state,
    //     text: action.payload,
    //     loading: false
    //   };
    // case FETCH_MOVIES:
    //   return {
    //     ...state,
    //     movies: action.payload,
    //     loading: false
    //   };
    // case FETCH_MOVIE:
    //   return {
    //     ...state,
    //     movie: action.payload,
    //     loading: false
    //   };
    case MODAL_STATE:
      return {
        ...state,
        modalState: !state.modalState
      };
    case CREATE_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
        // loading: true
      };
    case DELETE_CONTACT:
      console.log(state)
      let newContacts = state.contacts.filter((contact) => contact.phone != action.payload)
      return {
        ...state,
        contacts: newContacts
        // loading: true
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
