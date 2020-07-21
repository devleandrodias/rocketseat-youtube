import { createStore } from "redux";
import reducersTodo from "./ducks";

export const store = createStore(reducersTodo);
