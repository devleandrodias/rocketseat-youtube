import { createActions, createReducer } from "reduxsauce";

// Forma nova de se criar os Actions Types e Actions Creators

export const { Types, Creators } = createActions({
  addTodo: ["text"],
  toggleTodo: ["id"],
  removeTodo: ["id"],
});

// Forma antiga de se criar os Actions Types

// export const Types = {
//   ADD_TODO: "@todo/ADD",
//   TOGLE_TODO: "@todo/TOGGLE",
//   REMOVE_TODO: "@todo/REMOVE",
// };

const INITIAL_STATE = [];

// Em vez do Switch Case agora é arrow functions

const addTodo = (state = INITIAL_STATE, action) => [
  ...state,
  { id: Math.random(), text: action.text, complete: false },
];

const toggleTodo = (state = INITIAL_STATE, action) =>
  state.map((todo) =>
    todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
  );

const removeTodo = (state = INITIAL_STATE, action) =>
  state.filter((todo) => todo.id !== action.id);

// Forma nova de se criar o reducer

export const todos = createReducer(INITIAL_STATE, {
  [Types.ADD_TODO]: addTodo,
  [Types.TOGGLE_TODO]: toggleTodo,
  [Types.REMOVE_TODO]: removeTodo,
});

// Forma antiga de se criar um Reducer

// export function todos(state = INITIAL_STATE, action) {
//   switch (action.type) {
//     case Types.ADD_TODO:
//       return [
//         ...state,
//         { id: Math.random(), text: action.payload.text, complete: false },
//       ];
//     case Types.TOGLE_TODO:
//       return state.map((todo) =>
//         todo.id === action.payload.id
//           ? { ...todo, complete: !todo.complete }
//           : todo
//       );
//     case Types.REMOVE_TODO:
//       return state.filter((todo) => todo.id !== action.payload.id);
//     default:
//       return state;
//   }
// }

// Forma antiga de se criar os Actions Creators

// export const Creators = {
//   addTodo: (text) => ({
//     type: Types.ADD_TODO,
//     payload: {
//       text,
//     },
//   }),

//   toggleTodo: (id) => ({
//     type: Types.TOGLE_TODO,
//     payload: {
//       id,
//     },
//   }),

//   removeTodo: (id) => ({
//     type: Types.REMOVE_TODO,
//     payload: {
//       id,
//     },
//   }),
// };
