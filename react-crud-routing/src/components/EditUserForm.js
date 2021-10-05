import React, { useState, useEffect } from "react";
import { TextField, Button, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),

      width: "500px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(1),
    },
  },
}));

const EditUserForm = (props) => {
  const classes = useStyles();
  //set initial values of the form
  const initialFormState = {
    id: null,
    fname: "",
    lname: "",
    email: "",
    age: "",
  };
  const { view, setView } = props;

  const [user, setUser] = useState(
    props.editing ? props.currentUser : initialFormState
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const resetAddUser = () => {
    props.setEditing(false);
    setUser(initialFormState);
    props.setCurrentUser(initialFormState);
  };

  return !props.view ? (
    <form
      className={classes.root}
      //function to run on submit of the form
      onSubmit={(event) => {
        event.preventDefault();

        //if editing is true call updateUser() else call addUser()
        props.editing ? props.updateUser(user.id, user) : props.addUser(user);
        resetAddUser();
      }}
    >
      <TextField //input field for firstname
        label="First Name"
        type="text"
        name="fname"
        required
        value={user.fname}
        onChange={handleInputChange}
      />

      <TextField //input field for lastname
        label="Last Name"
        type="text"
        name="lname"
        required
        value={user.lname}
        onChange={handleInputChange}
      />

      <TextField //input field for email
        label="email"
        type="email"
        name="email"
        required
        value={user.email}
        onChange={handleInputChange}
      />

      <TextField //input field for age
        label="age"
        type="number"
        name="age"
        required
        value={user.age}
        onChange={handleInputChange}
      />

      <Button variant="contained" type="submit" color="primary">
        {props.editing ? "Update user" : "Add user"}
      </Button>
      {props.editing && (
        <Button variant="contained" color="primary" onClick={resetAddUser}>
          Cancel
        </Button>
      )}
    </form>
  ) : (
    <form
      className={classes.root}
      //function to run on submit of the form
      onSubmit={(event) => {
        event.preventDefault();

        //if editing is true call updateUser() else call addUser()
        props.editing ? props.updateUser(user.id, user) : props.addUser(user);
        resetAddUser();
      }}
    >
      <TextField //input field for firstname
        label="First Name"
        type="text"
        name="fname"
        required
        value={user.fname}
        onChange={handleInputChange}
      />

      <TextField //input field for lastname
        label="Last Name"
        type="text"
        name="lname"
        required
        value={user.lname}
        onChange={handleInputChange}
      />

      <TextField //input field for email
        label="email"
        type="email"
        name="email"
        required
        value={user.email}
        onChange={handleInputChange}
      />

      <TextField //input field for age
        label="age"
        type="number"
        name="age"
        required
        value={user.age}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default EditUserForm;
