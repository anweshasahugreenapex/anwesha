import { inputDataType } from "./types";

interface Loading {
  type: "LOADING";
}
interface storeInput {
  type: "STORE_INPUT";
  payload: inputDataType[];
}
export type ActionTypes = storeInput | Loading;
