import React, { useState, useEffect } from "react";

import Validation from "./Validation";

const SignupForm = (submitForm) => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrecte] = useState(false);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
    setDataIsCorrecte(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
    }
    // eslint-disable-next-line
  }, [errors]);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Create Account</h2>
        </div>
        <from className="from-wrapper">
          <div className="name">
            <label htmlFor="" className="label">
              Full Name
            </label>
            <input
              type="text"
              className="input"
              name="fullname"
              value={values.fullname}
              onChange={handleChange}
            />
            {errors.fullname && <p className="error">{errors.fullname}</p>}
          </div>
          <div className="email">
            <label htmlFor="" className="label">
              Email
            </label>
            <input
              type="email"
              className="input"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="password">
            <label htmlFor="" className="label">
              Password
            </label>
            <input
              type="password"
              className="input"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div>
            <button className="submit" onClick={handleFormSubmit}>
              Submit
            </button>
          </div>
        </from>
      </div>
    </div>
  );
};

export default SignupForm;
