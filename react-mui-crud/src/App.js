
import React, { useState } from "react";
import {
  TextField,
  Button,
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  makeStyles,
} from "@material-ui/core";

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
  table: {
    width: "90%",
    margin: "50px 0 0 50px",
  },
  thead: {
    "& > *": {
      background: "#000000",
      color: "#ffffff",
      fontSize: "20px",
    },
  },
}));

const App = () => {
  const classes = useStyles();

  //set initial values of the form
  const initialFormState = {
    id: null,
    fname: "",
    lname: "",
    email: "",
    age: "",
  };

  //set state of users array to empty array
  const [users, setUsers] = useState([]);

  //set editing to false initially
  const [editing, setEditing] = useState(false);

  //set currentuser object to initialform state
  const [currentUser, setCurrentUser] = useState(initialFormState);

  //function to add new user
  const addUser = (user) => {
    user.id = new Date().getUTCMilliseconds(); //take unique id  for every new user
    users.push(user); //push method is used to add the new user to the users array
    console.log(users);
  };

  //function to delete selected user
  const deleteUser = (id) => {
    //delete the user object from users array using filter where the id is equal to the id of clicked row
    setUsers(users.filter((user) => user.id !== id));
  };

  //function to edit a row
  const editRow = (user) => {
    setEditing(true);

    //set the currentuser value to user
    setCurrentUser(user);
  };

  //function to update the users array after editing a row
  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  //function to show the table
  const UserTable = () => (
    <Table className={classes.table}>
      <TableHead>
        <TableRow className={classes.thead}>
          <TableCell>ID</TableCell>
          <TableCell>FirstName</TableCell>
          <TableCell>LastName</TableCell>
          <TableCell>age</TableCell>
          <TableCell>email</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.length > 0 ? ( //if length of user is greater than 0 then show the data
          users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.fname}</TableCell>
              <TableCell>{user.lname}</TableCell>
              <TableCell>{user.age}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Button
                  color="primary"
                  varient="contained"
                  className="button muted-button"
                  onClick={() => {
                    editRow(user);
                  }}
                >
                  Edit
                </Button>
                <Button
                  color="secondary"
                  varient="contained"
                  className="button muted-button"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))
        ) : (
          //if users array is empty show no user
          <TableRow>
            <TableCell colSpan={6}>No users</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );

  //EditUserForm component
  const EditUserForm = () => {
    const initialState = {
      id: null,
      fname: " ",
      lname: " ",
      email: " ",
      age: " ",
    };

    //if editing is true then setUser state to currentUser other wise set the userState to initialState
    const [user, setUser] = useState(editing ? currentUser : initialState);

    const handleInputChange = (event) => {
      const { name, value } = event.target; //destructuring is used to handle the inputs from user entered in the form

      setUser({ ...user, [name]: value });
    };

   
    //function to reset the form and set editing to false
    const resetAddUser = () => {
      setEditing(false);
      setUser(initialState);
      setCurrentUser(initialState);
    };

    //return the form structure
    return (
      <form
        className={classes.root}

        //function to run on submit of the form
        onSubmit={(event) => {
          event.preventDefault();

          //if editing is true call updateUser() else call addUser() 
          editing ? updateUser(user.id, user) : addUser(user);
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
          {editing ? "Update user" : "Add user"}
        </Button>
        {editing && (
          <Button variant="contained" color="primary" onClick={resetAddUser}>
            Cancel
          </Button>
        )}
      </form>
    );
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>CRUD App with Hooks</h1>
      <div>
        <div>
          <div>
            <h2 style={{ textAlign: "center" }}>
              {editing ? "Edit user" : "Add user"}
            </h2>
            <EditUserForm />
          </div>
        </div>
        <div>
          <h2 style={{ textAlign: "center" }}>View users</h2>
          <UserTable />
        </div>
      </div>
    </div>
  );
};

export default App;
