import { createStore } from "redux";
import { reducer } from "./MeinReducer";

export const initialState = {
  item: [],
  color: "red"
};

export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
