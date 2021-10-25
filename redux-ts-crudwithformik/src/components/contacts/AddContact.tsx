
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../actions/contactAction";
import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import { formValue } from "../../types/contactType";



const AddContact = () => {
  // A custom validation function. This must return an object

  const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    age: Yup.number().min(1).max(150).required(),
  });

  const formik = useFormik({
    initialValues :{
      name:"",
      age:0,
      email:""
    },
    validationSchema,
    onSubmit: (values:formValue) => {
      // alert(JSON.stringify(values, null, 2))
      craeteContact(values);
    },



    // setTimeout(() => {
    //   // actions.handleReset();
    //   history.push('/');
    //   this.state.user.id ? this.props.addNewUser([{...values, id: this.state.user.id }]) : this.props.addNewUser([values])
    // }, 100);

  });

  let history = useHistory();
  const dispatch = useDispatch(); //returns the reference to the dispatch from redux store to dispatch actions as needed.
  const craeteContact = (values:formValue) => {
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
              Create Contact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddContact;




// import React, { useState,useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addContact } from "../../actions/contactAction";
// import { Button, TextField } from "@material-ui/core";
// import { useHistory } from "react-router-dom";
// import { useFormik,Formik } from "formik";
// import * as Yup from "yup";
// import { contactType } from "../../types/contactType";
// import { formValue } from "../../types/contactType";
// import { useParams } from "react-router-dom";
// import { getContact, updateContact } from "../../actions/contactAction";

// const AddContact = () => {


//   let  id:number  = useParams();


//   const contact = useSelector((state:any) => state.contact.contact);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [age, setAge] = useState(0);

//   useEffect(() => {
//     if (contact != null) {
//       setName(contact.name);
//       setAge(contact.age);
//       setEmail(contact.email);
//     }
//     console.log(contact);
//     //dispatch the contact id to be edited to the contact action to get the detals inside the form
//     dispatch(getContact(id));
//   }, [contact]);


//   // A custom validation function. This must return an object

//   const validationSchema = Yup.object({
//     name: Yup.string().required(),
//     email: Yup.string().email().required(),
//     age: Yup.number().min(1).max(150).required(),
//   });
//   const initialValues ={
//     email:contact!=null? contact.email:"",
//     name: contact!=null?contact.name:"",
//     age:contact!=null? contact.age:0,
//   }

//   const formik = useFormik({
//     initialValues ,
//     validationSchema,
//     onSubmit:contact!=null?  (values:formValue) => {
//       // alert(JSON.stringify(values, null, 2))
//       craeteContact(values);
//     }: (values) => {
//       // alert(JSON.stringify(values, null, 2))
//       onUpdateContact(values);
//     },



//     // setTimeout(() => {
//     //   // actions.handleReset();
//     //   history.push('/');
//     //   this.state.user.id ? this.props.addNewUser([{...values, id: this.state.user.id }]) : this.props.addNewUser([values])
//     // }, 100);

//   });
//   const onUpdateContact = (values:formValue) => {
//     console.log(values.name);
//     const update_contact = Object.assign(contact, {
//       name: values.name,
//       age: values.age,
//       email: values.email,
//     });

//     //dispatch the entered updated values
//     dispatch(updateContact(update_contact));
//     history.push("/");
//   };

//   let history = useHistory();
//   const dispatch = useDispatch(); //returns the reference to the dispatch from redux store to dispatch actions as needed.
//   const craeteContact = (values:formValue) => {
//     //an object of newContact is created with unique id
//     const new_contact = {
//       id: new Date().getUTCMilliseconds(),
//       name: values.name,
//       age: values.age,
//       email: values.email,
//     };

//     //dispatch the newContact to contactAction
//     dispatch(addContact(new_contact));
//     history.push("/");
//   };

//   return (
//     <div>
//       <div className="card border-7 shadow" style={{ marginTop: "100px" }}>
//         <div className="card-header">Add a Contact</div>
//         <div className="card-body">
//         <Formik initialValues={initialValues} validationSchema={validationSchema}   
//     onSubmit={ (contact!=null) ?(values:formValue) => {
     
//       craeteContact(values);
//     }: (values) => {
//       onUpdateContact(values);
//     }



//     // setTimeout(() => {
//     //   // actions.handleReset();
//     //   history.push('/');
//     //   this.state.user.id ? this.props.addNewUser([{...values, id: this.state.user.id }]) : this.props.addNewUser([values])
//     // }, 100);

//   }>
//           <form onSubmit={formik.handleSubmit}>
//             <div className="form-group">
//               <TextField
//                 type="text"
//                 className="form-control"
//                 placeholder="Enter Your Name"
//                 id="name"
//                 name="name"
               
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.name}
//               />
//               {formik.touched.name && formik.errors.name ? (
//                 <div className="error">{formik.errors.name}</div>
//               ) : null}
//             </div>
//             <div className="form-group">
//               <TextField
//                 className="form-control"
//                 placeholder="Enter Your E-mail Address"
//                 id="email"
//                 name="email"
//                 type="email"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.email}
//               />
//               {formik.touched.email && formik.errors.email ? (
//                 <div className="error">{formik.errors.email}</div>
//               ) : null}
//             </div>
//             <div className="form-group">
//               <TextField
//                 className="form-control"
//                 placeholder="Enter Your age "
//                 id="age"
//                 name="age"
//                 type="number"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.age}
//               />
//               {formik.touched.age && formik.errors.age ? (
//                 <div className="error">{formik.errors.age}</div>
//               ) : null}
//             </div>
//             <button
              
//               type="submit"
//             >
//               Create Contact
//             </button>
//           </form>
//           </Formik>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default AddContact;