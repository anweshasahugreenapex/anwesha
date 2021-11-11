import axios from "axios";
import { hit, fetchedObjectType } from "./ActionTypes";
import { Dispatch } from "redux";
import { FetchActionType } from "./Action";

const get_fetch_request = (): FetchActionType => ({
  type: "LOADING",
});

const success_fetch_request = (list: hit[]): FetchActionType => ({
  type: "SUCCESS",
  payload: list,
});

const fail_fetch_request = (error: string): FetchActionType => ({
  type: "ERROR",
  payload: error,
});

export const fetchPosts = (pageNumber: number) => {
  return (dispatch: Dispatch<FetchActionType>) => {
    dispatch(get_fetch_request());
    return axios
      .get<fetchedObjectType>(
        `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${pageNumber}`
      )
      .then((response) => {
        dispatch(success_fetch_request(response.data.hits));
        console.log(response.data);
        console.log(typeof response.data.hits);
      })
      .catch((error) => dispatch(fail_fetch_request(error)));
  };
};