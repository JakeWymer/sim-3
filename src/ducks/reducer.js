const initalState = {
  user: {}
};

const SET_USER = 'SET_USER';

export const setUser = (user) => {
  return({
    type: SET_USER,
    payload: user
  });
}

export default function reducer(state = initalState, action) {
  console.log(action);
  switch(action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
}