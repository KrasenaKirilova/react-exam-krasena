import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { TopBar } from "../topbar/TopBar";

export const Home = () => {
  const { hasUser, setHasUser } = useContext(AuthContext);

  return (
    <>
      <div className="container">
        <div className="section-title position-relative text-center mx-auto mb-5 pb-3">
          <h2 className="text-primary font-secondary">Welcome!</h2>
          <h1 className="display-4 text-uppercase">Welcome To Krasena's Bakery</h1>
        </div>
        {hasUser && <h4>The user is logged in!</h4>}
        <img className="position-center w-30 h-30" src="img/about.jpg" />

        <TopBar />
      </div>
    </>
  );
};
