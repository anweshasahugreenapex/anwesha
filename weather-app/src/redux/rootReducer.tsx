import { combineReducers } from "redux";
import { Reducer } from "./Reducer";

export const rootReducer = combineReducers({ Reducer });
export type RootState = ReturnType<typeof rootReducer>;