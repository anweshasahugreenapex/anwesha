import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContact, updateContact } from "../../actions/contactAction";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";

const EditContact = () => {
  let { id } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact.contact);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age,setAge] = useState("");

  //place the row values to be edited in the edit-form
  useEffect(() => {
    if (contact != null) {
      setName(contact.name);
     setAge(contact.age);
      setEmail(contact.email);
    }

    //dispatch the contact id to be edited to the contact action to get the detals inside the form
    dispatch(getContact(id));
  }, [contact]);

  const onUpdateContact = (e) => {
    e.preventDefault();

    const update_contact = Object.assign(contact, {
      name: name,
      age: age,
      email: email,
    });

    //dispatch the entered updated values
    dispatch(updateContact(update_contact));
    history.push("/");
  };
  return (
    <div className="card border-0 shadow" style={{ marginTop: "100px" }}>
      <div className="card-header">Update Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => onUpdateContact(e)}>
          <div className="form-group">
            <TextField
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <TextField
              type="number"
              className="form-control"
              placeholder="Enter Your age"
              value={age}
              onChange={(e) =>setAge(e.target.value)}
            />
          </div>
          <div className="form-group">
            <TextField
              type="text"
              className="form-control"
              placeholder="Enter Your E-mail Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button
            varient="contained"
            style={{
              background: "#007bff",
              color: "white",
              marginLeft: "450px",
            }}
            type="submit"
          >
            Update Contact
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
