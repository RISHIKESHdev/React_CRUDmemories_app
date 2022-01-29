
import { combineReducers } from "redux";
import posts from "./posts";

export const reducers= combineReducers({
  //both are same
  // posts,
  posts:posts,
});
