import {
    CREATE_CONTACT,
    GET_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT,
  } from "../constant/types";

  import { ContactActionType } from "../types/actions";
  import { contactType } from "../types/contactType";
  const intialState = {
    contacts: [],
    contact: null,
  };
  
 const contactReducer = (state = intialState, action:ContactActionType) => {
    switch (action.type) {
      case CREATE_CONTACT:
        return {
          ...state,
          contacts: [...state.contacts, action.contact],
        };
      case GET_CONTACT:
        let arr:any = state.contacts.filter(
          (contact:contactType) => contact.id == action.id
        );
        arr = arr.values();
        for (let val of arr) {
          arr = val;
        }
        return {
          ...state,
          contact: arr,
        };
      case UPDATE_CONTACT:
        return {
          ...state,
          contacts: state.contacts.map((contact:contactType) =>
            contact.id === action.contact.id ? action.contact: contact
          ),
        };
      case DELETE_CONTACT:
        return {
          ...state,
          contacts: state.contacts.filter(
            (contact:contactType) => contact.id != action.id
          ),
        };
  
      default:
        return state;
    }
  };
  export default contactReducer;