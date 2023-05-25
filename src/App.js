import { Navigation } from "./components/navigation/Navigation";
import { TopBar } from "./components/topbar/TopBar";
import { Footer } from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Albums } from "./components/albums/Albums";
import { Products } from "./components/products/Products";
import { Home } from "./components/home/Home";
import { NotFound } from "./components/not-found/NotFound";
import { Login } from "./components/forms/Login";
import { Register } from "./components/forms/Register";
import { About } from "./components/about/About";
import { Contacts } from "./components/contacts/Contacts";
import { DetailsPage } from "./components/detailsPage/DetailsPage";
// import { Comments } from "./components/comments/Comments";
import { useState } from "react";
import { AuthContext } from "./context/AuthContext";


function App() {
  const [hasUser, setHasUser] = useState(false);

  return (
    <AuthContext.Provider value={{ hasUser, setHasUser }}>
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/products" element={<Products />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/albums/:id" element={<DetailsPage />} />
            {/* <Route path="/comments" element={<Comments />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/topbar" element={<TopBar />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
