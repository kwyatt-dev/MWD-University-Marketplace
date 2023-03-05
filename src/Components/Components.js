import React from "react";
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
        <Route path='/' exact element={<MainModule />} />
        <Route path='/users' element={<UsersModule />} />
      </Routes>
      <Footer />
    </Router>
  );
}


//const Components = () => {
//  return <MainModule />;
//};

//export default Components;
