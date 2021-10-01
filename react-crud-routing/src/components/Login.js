


import React from 'react';
 import { Formik, Form, Field } from 'formik';
 
 function validatePassword(value) {
   let error;
   if (!value) {
     error = 'Required';
   } else if (value !== 'admin') {
     error = 'Invalid password';
   }
   return error;
 }
 
 function validateUsername(value) {
   let error;
   if (!value) {
    error = 'Required';}
  else if (value !== 'admin') {
     error = 'invalid user';
   }
   return error;
 }
 
  const Login = () => (
   <div>
     <h1>Signup</h1>
     <Formik
       initialValues={{
         username: '',
         password: '',
       }}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched, isValidating }) => (
         <Form>
           <Field name="password" validate={validatePassword} />
           {errors.password && touched.password && <div>{errors.password}</div>}
 
           <Field name="username" validate={validateUsername} />
           {errors.username && touched.username && <div>{errors.username}</div>}
 
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
   </div>
 );

 export default Login