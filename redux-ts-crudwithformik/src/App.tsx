// import React from "react";
// import Navbar from "./components/elements/Navbar";
// import Contacts from "./components/contacts/Contacts";
// import { Provider } from "react-redux";
// import store from "./store";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import AddContact from "./components/contacts/AddContact";
// import EditContact from "./components/contacts/EditContact";

// function App() {
//   return (

//     //give store access to the whole app
//     <Provider store={store}>
//       <Router>
//         <div className="App">
//           <Navbar />
//           <div className="container">
//             <div className="py-3">
//               <Switch>
//                 <Route exact path="/" component={Contacts} />
//                 <Route exact path="/contacts/add" component={AddContact} />
//                 {/* <Route
//                   exact
//                   path="/contacts/edit/:id"
//                   component={EditContact}
//                 /> */}
//               </Switch>
//             </div>
//           </div>
//         </div>
//       </Router>
//     </Provider>
//   );
// }

// export default App;

import React, { useState } from "react";
import { useEffect } from "react";

import { Formik, Form, Field, useFormik } from "formik";

import * as Yup from "yup";
import { useDispatch } from "react-redux";
import {
  addContact,
  updateContact,
  deleteContact,
  getContact,
} from "./actions/contactAction";
import { contactType, formValue } from "./types/contactType";
import { useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch(); //returns the reference to the dispatch from redux store to dispatch actions as needed.

  const contacts = useSelector((state: any) => state.contact.contacts); //get the state of contacts from the store

  console.log(contacts);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState(0);
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    age: Yup.number().min(1).max(150).required(),
  });

  const craeteContact = (values: formValue) => {
    //an object of newContact is created with unique id
    const new_contact = {
      id: new Date().getUTCMilliseconds(),
      name: values.name,
      age: values.age,
      email: values.email,
    };

    //dispatch the newContact to contactAction
    dispatch(addContact(new_contact));
  };
  let arr = [];

  const handleEditClick = (values: contactType) => {
    setEditing(true);
    setName(values.name);
    setAge(values.age);
    setEmail(values.email);
    setEditId(values.id);
    //   console.log(values.id)

    // arr= contacts.filter(
    //     (contact:contactType) => contact.id == values.id
    //   )
    //   console.log(arr)
  };

  const onUpdateContact = (values: formValue) => {
    console.log(values);
    const update_contact = Object.assign({
      id: editId,
      name: values.name,
      age: values.age,
      email: values.email,
    });

    //dispatch the entered updated values
    dispatch(updateContact(update_contact));
    setEditing(false);
  };

  return (
    <div>
      <h1>form</h1>
      <Formik
        initialValues={{
          name: editing ? name : "",
          email: editing ? email : "",
          age: editing ? age : 0,
        }}
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={(values: formValue) => {
          // same shape as initial values
          //
          editing ? onUpdateContact(values) : craeteContact(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="name" placeholder="name" />
            {/* If this field has been touched, and it contains an error, display it
             */}
            {touched.name && errors.name && <div>{errors.name}</div>}
            <div>
              <Field name="email" placeholder="email" />
              {/* If this field has been touched, and it contains an error, display
          it */}
              {touched.email && errors.email && <div>{errors.email}</div>}
            </div>
            <div>
              <Field name="age" placeholder="age" />
              {/* If this field has been touched, and it contains an error, display
          it */}
              {touched.age && errors.age && <div>{errors.age}</div>}
            </div>

            {editing ? (
              <button type="submit">Update</button>
            ) : (
              <button type="submit">Submit</button>
            )}
          </Form>
        )}
      </Formik>

      <table className="table shadow" style={{ marginTop: "100px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>age</th>
            <th>E-mail</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts &&
            contacts.map((data: contactType, index: number) => {
              return (
                <tr key={index + 1}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.age}</td>
                  <td>{data.email}</td>
                  <td>
                    <button onClick={() => handleEditClick(data)}>EDIT</button>{" "}
                    <button onClick={() => dispatch(deleteContact(data.id))}>
                      DELETE
                    </button>{" "}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default App;
