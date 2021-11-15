import { ActionTypes } from "../Types/ActionTypes";
import { inputDataType } from "../Types/types";


interface initialStateType {
  data: inputDataType[];
  loading: boolean;
}

const intialState: initialStateType = {
  data: [],
  loading: false,
};

export const Reducer = (state = intialState, action: ActionTypes): initialStateType => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "STORE_INPUT":
        // console.log(" at storeinput reducer")
      return {
        data: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export type ReducerType = ReturnType<typeof Reducer>;