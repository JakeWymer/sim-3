const initalState = {
  user: {}
};

const SET_USER = 'SET_USER';
const CLEAR_USER = 'CLEAR_USER';

export function setUser(u) {
  console.log("setUser")
  return {
    type: SET_USER,
    payload: u
  };
}

export function clearUser() {
  return {
    type: CLEAR_USER,
    payload: {}
  }
}

export default function reducer(state = initalState, action) {
  console.log("reducer", action)
  switch(action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload
      }
    case CLEAR_USER:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
}