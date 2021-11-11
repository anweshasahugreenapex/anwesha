import { FetchActionType } from "./Action";
import { State, User } from "./ActionTypes";

const intialState: State = {
  loading: false,
  data: [],
  error: "",
};

export const fechingReducer = (
  state = intialState,
  action: FetchActionType
): State => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SUCCESS":
      console.log(state.data);

      return {
        loading: false,
        data: [...state.data, ...action.payload],
        error: "",
      };

    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export type AppState = ReturnType<typeof fechingReducer>;
