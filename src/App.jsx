import React, { useState } from "react";
import "./App.css";
import FormInput from "./Components/FormInput";

const App = () => {
  const [userValues, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be -3-16 characters and shouldn't include any special character!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      label: "Username",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Please enter valid Email address",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "text",
      placeholder: "Password",
      errorMessage: "Password should be at-least 8 characters",
      label: "Password",
      pattern:
        "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,20}$",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match",
      label: "Confirm Password",
      pattern: userValues.password,
      required: true,
    },
  ];
  console.log(userValues);

  const onChange = (e) => {
    setValues({ ...userValues, [e.target.name]: e.target.value });
  };
  console.log(userValues);

  const submit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={submit}>
      <h1 style={{ marginTop: "25px" }}>Register</h1>
      {inputs.map((input) => (
        <FormInput
          key={input.id}
          {...input}
          value={userValues[input.name]}
          onChange={onChange}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
