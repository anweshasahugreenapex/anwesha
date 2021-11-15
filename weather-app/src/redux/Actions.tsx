import { inputDataType } from "../Types/types";

export const storeInput = (inputData: inputDataType[]) => {
  return {
    type: "STORE_INPUT",
    payload: inputData,
  };
};

export const loading = () => {
  return {
    type: "LOADING",
  };
};
