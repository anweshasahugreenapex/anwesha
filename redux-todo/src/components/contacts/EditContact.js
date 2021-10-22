import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContact, updateContact } from "../../actions/contactAction";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

const EditContact = () => {
  let { id } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact.contact);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  //place the row values to be edited in the edit-form
  useEffect(() => {
    if (contact != null) {
      setName(contact.name);
      setAge(contact.age);
      setEmail(contact.email);
    }
    console.log(contact);
    //dispatch the contact id to be edited to the contact action to get the detals inside the form
    dispatch(getContact(id));
  }, [contact]);
  const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    age: Yup.number().min(1).max(150).required(),
  });

  const formik = useFormik({
    initialValues: {
      email: contact.name,
      name: contact.email,
      age:contact. age,
    },
    validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2))
      onUpdateContact(values);
    },
   
  });
  const onUpdateContact = (values) => {
    console.log(values.name);
    const update_contact = Object.assign(contact, {
      name: values.name,
      age: values.age,
      email: values.email,
    });

    //dispatch the entered updated values
    dispatch(updateContact(update_contact));
    history.push("/");
  };
  return (
    <div>
      <div className="card border-7 shadow" style={{ marginTop: "100px" }}>
        <div className="card-header">Add a Contact</div>
        <div className="card-body">
          <Formik initialValues={{ email: name,
      name: email,
      age: age,}} validationSchema={validationSchema}  enableReinitialize  onSubmit={(values) => {
        // alert(JSON.stringify(values, null, 2))
        onUpdateContact(values);
      }}>
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
              update Contact
            </Button>
          </form>

          </Formik>
          
        </div>
      </div>
    </div>
  );
};

export default EditContact;
