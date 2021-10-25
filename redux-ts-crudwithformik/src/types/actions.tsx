import { type } from "os";
import { contactType } from "./contactType";
export const CREATE_CONTACT = "CREATE_CONTACT";
export const GET_CONTACT = "GET_CONTACT";
export const UPDATE_CONTACT = "UPDATE_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";

export interface createContactAction{

    type:typeof CREATE_CONTACT;
    contact:contactType;
    
}

export interface getContactAction{

    type:typeof GET_CONTACT;
    id:number
}

export interface updateContactAction{

    type:typeof UPDATE_CONTACT;
    contact:contactType
}

export interface deleteContactAction{

    type:typeof DELETE_CONTACT;
    id:number
}

export type ContactActionType=createContactAction | getContactAction | updateContactAction | deleteContactAction

export type AppActions=ContactActionType