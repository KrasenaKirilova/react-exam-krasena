import { useState } from "react";
import { useLocation, link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

export const Login = () => {
  const Location = useLocation();
  const navigate = useNavigate();

  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasUser, setHasUser] = useState(false);

  const onLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");
    const repass = formData.get("repass");

    if (username.length < 5) {
      return setUserNameError("User name must be at least 5 charachters long");
    } else {
      setUserNameError("");
    }
    if (password.length < 7) {
      return setPasswordError("Password must be at least 7 charachters long");
    } else {
      setPasswordError("");
    }
    setHasUser(true);
    e.target.reset();
    
  };

  return (
    <>
      <h1> Login here :</h1>

      <form onSubmit={onLogin} className={styles.loginForm}>
        <div>
          <label htmlFor="username">User name: </label>
          <input type="text" id="username" name="username"></input>
        </div>
        <div>{userNameError.length > 0 && <p>{userNameError}</p>}</div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password"></input>
        </div>
        <div>{passwordError.length > 0 && <p>{passwordError}</p>}</div>
        <div>
          <label htmlFor="repass">Repeat password: </label>
          <input type="password" id="repass" name="repass"></input>
        </div>
        <input type="submit" value="Login"></input>
      </form>
    </>
  );
};