import React from "react";
import Home from "./Home";
import AuthLogin from "./Auth/AuthLogin";
import AuthRegister from "./Auth/AuthRegister";
import ProductListingsModule from "./ProductListings/ProductListings.js";
import {ProtectedRoute, ProtectedAuthRoute} from "./ProtectedRoute/ProtectedRoute.js";
import UsersModule from "./Users/Users.js";
import Footer from "./Footer/Footer";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from "react-router-dom";

export default function Components() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/auth" exact element={<Home />} /> */}
        {/* <Route path='/' exact element={<ProductListingsModule />} /> */}
        <Route path= "/users" element={<UsersModule />} />
        <Route path="/auth/register" element={<AuthRegister />} />
        <Route path="/auth/login" element={<AuthLogin />} />
        <Route
          path="/"
          element={<ProtectedRoute path="/" element={ProductListingsModule} />}
        />
        <Route
          path="/auth"
          element={<ProtectedAuthRoute path="/" element={<Home />} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}


//const Components = () => {
//  return <MainModule />;
//};

//export default Components;
