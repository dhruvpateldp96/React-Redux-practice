import {

  PUSH_BIDS,
  PUSH_PROJECT,
  LOADING,
  REMOVE_PROJECT,
  SHOW_BIDS
} from '../actions/types';

const initialState = {
  projects: [],
  bids: {},
  showBids: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PUSH_BIDS:
   
      let finalBidState
      if (state.bids[action.projectName]){
        const bidState = state.bids[action.projectName]
        const appendedNewObj = [ ...bidState, action.bid ]
        finalBidState = appendedNewObj
      }else{
        finalBidState = [action.bid]
      }
      return {
        ...state,
        bids: {...state.bids, [action.projectName]: finalBidState }
      };

    case PUSH_PROJECT:
      //date from the system
      let currentdate = new Date(); 
      
      //formatting the date
      let datetime = currentdate.getDate() + "/"
          + (currentdate.getMonth()+1)  + "/" 
          + currentdate.getFullYear() + "@"  
          + currentdate.getHours() + ":"  
          + currentdate.getMinutes() + ":" 
          + currentdate.getSeconds();


      //
      const newProject = JSON.parse(action.payload)
      
      //immutable ne arry of state
      const newProjectStates = [...state.projects, newProject]

      const sortedProjectStates = newProjectStates.sort((obj)=> obj.tagTime.split(" ")[0] - datetime.split("@")[1])
      return {
        ...state,
        projects: sortedProjectStates,
      };


    case REMOVE_PROJECT:
      var newBids = Object.assign({}, state.bids);
      delete newBids[action.projectName];
      return {
        ...state,
        projects: state.projects.filter((projectObj) => projectObj.project !== action.projectName),
        bids: newBids,
        showBids: false
      };
  
    case SHOW_BIDS:
      
      return {
        ...state,
        showBids: true
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
