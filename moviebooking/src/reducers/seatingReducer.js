import {
    SEATING,
  } from '../actions/types';

const initialState = {
    reservedSeating: {},
    totalSeats: 100
};


export default function(state = initialState, action) {
    switch (action.type) {
      // case SEARCH_MOVIE:
      //   return {
      //     ...state,
      //     text: action.payload,
      //     loading: false
      //   };
    //   case FETCH_MOVIES:
    //     return {
    //       ...state,
    //       movies: action.payload,
    //       loading: false
    //     };
      case SEATING:
        let retrievedReservedSeating = JSON.parse(localStorage.getItem("newReservedSeating"))

        // Fetching state from localStorage
        if (retrievedReservedSeating !== null){
            state.reservedSeating = retrievedReservedSeating
        }

        let newReservedSeating
        //if the state contains info about movieBooking
        if (Object.keys(state.reservedSeating).includes(action.movieId)) {
            // console.log("insei")
            //check if the booking of current show has the incoming seatId
            if (state.reservedSeating[action.movieId].includes(action.seatId)){
                newReservedSeating = {...state.reservedSeating, 
                    [action.movieId]: [...state.reservedSeating[action.movieId].filter((seat)=>seat!==action.seatId)]}
                    //moviekey          //new state without the key
            }else{
                newReservedSeating = {...state.reservedSeating, [action.movieId]: [...state.reservedSeating[action.movieId], action.seatId]}
                                                                //key             //array                                   //new seatId
            }
        }else{
            //state doesnt contain info about current movie booking
            //append the incoming movieId: seatId
            // const newIncomingBooking = new Object()
            // newIncomingBooking[action.movieId] = action.seatId
            
            newReservedSeating = {...state.reservedSeating, [action.movieId]: [action.seatId] }
                                                            //key               //newSeat
        }

        
        
        console.log(newReservedSeating)
        localStorage.setItem("newReservedSeating", JSON.stringify(newReservedSeating));

        return {
          ...state,
          reservedSeating: newReservedSeating,
        };
    
      default:
        return state;
    }
  }
  