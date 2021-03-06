import { createReducer } from "@reduxjs/toolkit";
import { addNewToList, deletedItem, filterChange } from "./actions";

const initialState = {
  items: [],
  filter: "",
};

const mainReducer = createReducer(initialState, {
  [addNewToList]: (state, action) => ({
    ...state,
    items: [action.payload, ...state.items],
  }),
  [deletedItem]: (state, action) => ({
    ...state,
    items: state.items.filter((item) => item.id !== action.payload),
  }),
  [filterChange]: (state, action) => ({
    ...state,
    filter: action.payload,
  }),
});

export default mainReducer;
