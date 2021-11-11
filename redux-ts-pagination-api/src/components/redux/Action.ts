import {  hit } from "./ActionTypes";


interface loading {
  type: "LOADING";
}

interface success {
  type: "SUCCESS";
  payload: hit[];
}

interface error {
  type: "ERROR";
  payload: string;
}

export type FetchActionType= loading | success | error;