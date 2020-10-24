let initialState = {
    map_visible: false,
    map_width: 0,
    restaurant: {},
    funny_intros: ["You know the lunch room is full of weirdos. Take a break at ", "A line at the microwave killing your day? Head over to ", "Indecisive much? You should go to "],
    current_intro: "",
  }

const recommendation = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RECOMMENDATION':
      const newIntro = state.funny_intros[Math.floor(Math.random()*state.funny_intros.length)]
      return {map_visible: state.map_visible, map_width: state.map_width, restaurant: action.restaurant, funny_intros: [...state.funny_intros], current_intro: newIntro}
    case 'TOGGLE_MAP':
      return {map_visible: !state.map_visible, map_width: window.innerWidth - 90, restaurant: state.restaurant, funny_intros: [...state.funny_intros], current_intro: state.current_intro}
      case 'UPDATE_MAP_WIDTH':
        return {map_visible: state.map_visible, map_width: window.innerWidth - 90, restaurant: state.restaurant, funny_intros: [...state.funny_intros], current_intro: state.current_intro}

    default:
      return state
  }
}

export default recommendation
