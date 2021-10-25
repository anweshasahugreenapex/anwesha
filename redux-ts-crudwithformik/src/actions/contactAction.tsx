import {
  CREATE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
} from "../constant/types";
import { AppActions } from "../types/actions";
import { contactType } from "../types/contactType";
// actions

// add a contact
export const addContact = (contact: contactType): AppActions => ({
  type: CREATE_CONTACT,
contact,
});

// get a contact
export const getContact = (id: number): AppActions => ({
  type: GET_CONTACT,
  id,
});

// update a contact
export const updateContact = (contact: contactType): AppActions => ({
  type: UPDATE_CONTACT,
  contact,
});

// delete a contact
export const deleteContact = (id: number): AppActions => ({
  type: DELETE_CONTACT,
   id,
});
