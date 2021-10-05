import React from "react";
import { Formik, Form, Field } from "formik";
import { useHistory } from "react-router";

//validate password using formik
const validatePassword = (value) => {
  let error;
  if (!value) {
    error = "Required";
  } else if (value !== "admin") {
    error = "Invalid password";
  }
  return error;
};

//validate username using formik
const validateUsername = (value) => {
  let error;
  if (!value) {
    error = "Required";
  } else if (value !== "admin") {
    error = "invalid user";
  }
  return error;
};

const Login = () => {
  let history = useHistory();
  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={(values) => {
          // same shape as initial values

          console.log(values);
          history.push("./Dashboard");
        }}
      >
        {({ errors, touched, isValidating }) => (
          <div
            style={{
              marginLeft: "32%",
              width: "40%",
              marginTop: "10%",
              height: "100%",
            }}
          >
            <h1 style={{ marginLeft: "35%", fontWeight: "bold" }}>Sign Up</h1>
            <Form>
              <div>
                <label
                  style={{ fontSize: "20px", fontWeight: "500" }}
                  htmlFor="username"
                >
                  UserName
                </label>
                <Field
                  style={{ width: "100%", borderRadius: "5px", height: "50px" }}
                  name="username"
                  validate={validateUsername}
                />
                {errors.username && touched.username && (
                  <div style={{ color: "red" }}>{errors.username}</div>
                )}
              </div>

              <div>
                <label
                  style={{ fontSize: "20px", fontWeight: "500" }}
                  htmlFor="password"
                >
                  Password
                </label>
                <Field
                  style={{ width: "100%", borderRadius: "5px", height: "50px" }}
                  name="password"
                  validate={validatePassword}
                />
                {errors.password && touched.password && (
                  <div style={{ color: "red" }}>{errors.password}</div>
                )}
              </div>

              <button
                style={{
                  width: "100%",
                  background: "linear-gradient( to right ,#060b26,#ffffff)",
                  height: "100%",
                  fontWeight: "600",
                  marginTop: "2%",
                  height: "50px",
                  borderRadius: "5px",
                  color: "white",
                  fontSize: "20px",
                }}
                type="submit"
                disabled={errors.username || errors.password}
              >
                LOGIN
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Login;
