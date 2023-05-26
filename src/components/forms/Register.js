import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

export const Register = () => {
  const navigate = useNavigate();

  const [hasUser, setHasUser] = useState(false);

  const onRegister = (e) => {
    e.preventDefault();
    
    setHasUser(true);
    navigate("/products");
    e.target.reset();
    
  };

  return (
    <section id="register-page" className={styles.formContainer}>
      <form id="register" onSubmit={onRegister}>
        <div className="container">
          <div className="brand-logo"></div>
          <h1>Register</h1>

          <label htmlFor="email">Email:</label>
          <input
            className={styles.formInput}
            type="email"
            id="email"
            name="email"
            placeholder="yourEmail@email.com"
          />

          <label htmlFor="pass">Password:</label>
          <input
            className={styles.formInput}
            type="password"
            name="password"
            id="password"
          />

          <label htmlFor="con-pass">Confirm Password:</label>
          <input
            className={styles.formInput}
            type="password"
            name="repass"
            id="repass"
          />

          <input className="btn submit" type="submit" value="Register" />

          <p className="field">
            <span>
              If you already have profile click <Link to="/login">here</Link>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
};
