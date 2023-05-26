import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import styles from "./Login.module.css";

export const Login = () => {
  const navigate = useNavigate();

  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [repassError, setRepassError] = useState("");

  const { setHasUser } = useContext(AuthContext);

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
    if (repass !== password) {
      return setRepassError("Re-pass don't match!");
    } else {
      setRepassError("");
    }
    setHasUser(true);

    navigate("/");
    e.target.reset();
  };

  return (
    <>
      <h1 className={styles.myHeading}> Login here :</h1>
      <div className={styles.formContainer}>
        <form onSubmit={onLogin}>
          <div>
            <label htmlFor="username">User name: </label>
            <input
              input
              className={styles.formInput}
              type="text"
              id="username"
              name="username"
            ></input>
          </div>
          <div className={styles.error}>
            {userNameError.length > 0 && <p>{userNameError}</p>}
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              className={styles.formInput}
              type="password"
              id="password"
              name="password"
            ></input>
          </div>
          <div className={styles.error}>
            {passwordError.length > 0 && <p>{passwordError}</p>}
          </div>
          <div>
            <label htmlFor="repass">Repeat password: </label>
            <input
              className={styles.formInput}
              type="password"
              id="repass"
              name="repass"
            ></input>
          </div>
          <div className={styles.error}>
            {repassError.length > 0 && <p>{repassError}</p>}
          </div>
          <input
            className={styles.formButton}
            type="submit"
            value="Login"
          ></input>
        </form>
      </div>
    </>
  );
};
