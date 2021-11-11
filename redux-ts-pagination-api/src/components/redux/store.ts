import { applyMiddleware, createStore } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { FetchActionType } from "./Action";
import { AppState, fechingReducer} from "./reducer";


export const store = createStore<AppState, FetchActionType, {}, {}>(
    fechingReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, FetchActionType>)
);