import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContact, updateContact } from "../../actions/contactAction";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { TextField, Button, RootRefProps } from "@material-ui/core";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { contactType } from "../../types/contactType";
import { formValue } from "../../types/contactType";

const EditContact = () => {
  let  id:number  = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const contact = useSelector((state:any) => state.contact.contact);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

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
      email:contact!=null? contact.email:"",
      name: contact!=null?contact.name:"",
      age:contact!=null? contact.age:0,
    },
    validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2))
      onUpdateContact(values);
    },
   
  });
  const onUpdateContact = (values:formValue) => {
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
      age: age,}} validationSchema={validationSchema}  enableReinitialize  onSubmit={(values:formValue) => {
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
            <button
              
              type="submit"
            >
              update Contact
            </button>
          </form>

          </Formik>
          
        </div>
      </div>
    </div>
  );
};

export default EditContact;



