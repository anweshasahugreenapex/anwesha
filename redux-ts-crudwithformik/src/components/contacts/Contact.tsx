import React, { FC } from "react";
import { Link } from "react-router-dom";
import { deleteContact } from "../../actions/contactAction";
import { useDispatch } from "react-redux";
import { TableCell, TableRow } from "@material-ui/core";



const Contact  = ({contact}:{contact:any}) => {
  const dispatch = useDispatch(); //returns the reference to the dispatch from redux store to dispatch actions as needed.

  // //destructure props
  const { name, age, email, id } = contact;

  return (
    //return the row containing contact details with edit and delete action options
    //editrow action is linked to EditContacts and to delete a row the deleteContact will be dispatched to the contactAction
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{age}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell className="actions">
        {/* <Link to={`/contacts/edit/${id}`}>
          <span className="material-icons mr-2">edit</span>
        </Link> */}
        <span
          className="material-icons  text-danger"
          style={{ cursor: "pointer" }}
          onClick={() => dispatch(deleteContact(id))}
        >
          remove_circle
        </span>
      </TableCell>
    </TableRow>
  );
};

export default Contact;