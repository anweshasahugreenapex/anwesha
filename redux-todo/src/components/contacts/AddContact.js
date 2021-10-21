import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../actions/contactAction";
import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const AddContact = () => {
  let history = useHistory();
 const dispatch = useDispatch();//returns the reference to the dispatch from redux store to dispatch actions as needed.

 //set initial states of the input fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const craeteContact = (e) => {
    e.preventDefault();

    //an object of newContact is created with unique id
    const new_contact = {
      id: new Date().getUTCMilliseconds(),
      name: name,
      age: age,
      email: email,
    };

    //dispatch the newContact to contactAction
    dispatch(addContact(new_contact));
    history.push("/");
  };

  return (

    //return the addContact form to add new contact
    <div className="card border-7 shadow" style={{ marginTop: "100px" }}>
      <div className="card-header">Add a Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => craeteContact(e)}>
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
              placeholder="Enter Your age "
              value={age}
              onChange={(e) => setAge(e.target.value)}
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
            Create Contact
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
