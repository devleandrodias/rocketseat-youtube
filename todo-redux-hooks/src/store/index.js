import { createStore } from "redux";

const INITIAL_STATE = {
  data: ["React Native", "Flutter", "Go Lang"],
};

function courses(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_COURSE":
      return { ...state, data: [...state.data, action.title] };
    default:
      return state;
  }
}

export const store = createStore(courses);
