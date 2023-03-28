import React from "react";
import Home from "./Home";
import AuthLogin from "./Auth/AuthLogin";
import AuthRegister from "./Auth/AuthRegister";
import ProductListingsModule from "./ProductListings/ProductListings.js";
import UsersModule from "./Users/Users.js";
import Footer from "./Footer/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect
} from "react-router-dom";

export default function Components() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        {/* <Route path='/' exact element={<ProductListingsModule />} /> */}
        <Route path= "/users" element={<UsersModule />} />
        <Route path="/auth/register" element={<AuthRegister />} />
        <Route path="/auth/login" element={<AuthLogin />} />
      </Routes>
      <Footer />
    </Router>
  );
}


//const Components = () => {
//  return <MainModule />;
//};

//export default Components;
