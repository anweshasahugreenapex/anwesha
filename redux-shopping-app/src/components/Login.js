import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./Login.css";

 function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history=useHistory();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  
  return (

    <form onSubmit={()=>history.push("/Products")} >
  <div className="form-group">
    {<h2>LOGIN FORM</h2>}
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  );
}
export default Login;