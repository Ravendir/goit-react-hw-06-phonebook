import { createAction } from "@reduxjs/toolkit";

const addNewToList = createAction("list/addToList");
const deletedItem = createAction("list/deletedItem");
const filterChange = createAction("filter/filterChange");

export { addNewToList, deletedItem, filterChange };
