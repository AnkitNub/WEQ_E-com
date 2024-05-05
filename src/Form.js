import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Form.module.css";

const LoginForm = ({ onLogin }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/ecom");
    // Retrieve user credentials from local storage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.username === username &&
      storedUser.password === password
    ) {
      // Call the onLogin callback with the logged-in user data
      onLogin({ username: storedUser.username, email: storedUser.email });
    } else {
      //   alert("Invalid username or password");
    }
  };

  return (
    <div className={classes["center"]}>
      <form className={classes["form"]} onSubmit={handleSubmit}>
        <input
          className={classes["input"]}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className={classes["input"]}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={classes["hbutton"]} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
