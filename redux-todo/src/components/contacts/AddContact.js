import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../actions/contactAction";
import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddContact = () => {
  // A custom validation function. This must return an object

  const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    age: Yup.number().min(1).max(150).required(),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      age: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2))
      craeteContact(values);
    },
  });

  let history = useHistory();
  const dispatch = useDispatch(); //returns the reference to the dispatch from redux store to dispatch actions as needed.
  const craeteContact = (values) => {
    //an object of newContact is created with unique id
    const new_contact = {
      id: new Date().getUTCMilliseconds(),
      name: values.name,
      age: values.age,
      email: values.email,
    };

    //dispatch the newContact to contactAction
    dispatch(addContact(new_contact));
    history.push("/");
  };

  return (
    <div>
      <div className="card border-7 shadow" style={{ marginTop: "100px" }}>
        <div className="card-header">Add a Contact</div>
        <div className="card-body">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <TextField
                type="text"
                className="form-control"
                placeholder="Enter Your Name"
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="error">{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="form-group">
              <TextField
                className="form-control"
                placeholder="Enter Your E-mail Address"
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="form-group">
              <TextField
                className="form-control"
                placeholder="Enter Your age "
                id="age"
                name="age"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.age}
              />
              {formik.touched.age && formik.errors.age ? (
                <div className="error">{formik.errors.age}</div>
              ) : null}
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
    </div>
  );
};
export default AddContact;
