import React from "react";
import Home from "./Home";
import AuthLogin from "./Auth/AuthLogin";
import AuthRegister from "./Auth/AuthRegister";
import ProductListingsModule from "./ProductListings/ProductListings.js";
import {ProtectedRoute, ProtectedAuthRoute} from "./ProtectedRoute/ProtectedRoute.js";
import UsersModule from "./Users/Users.js";
import ProfileMain from "./Profile/ProfileMain";
import Footer from "./Footer/Footer";
import PasswordReset from "./Auth/PasswordReset";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import EditListing from "./Profile/EditListing";

export default function Components() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/auth" exact element={<Home />} /> */}
        {/* <Route path='/' exact element={<ProductListingsModule />} /> */}
        <Route path= "/users" element={<UsersModule />} />
        <Route path="/auth/register" element={<AuthRegister />} />
        <Route path="/auth/login" element={<AuthLogin />} />
        <Route path="/auth/reset/:email" element={<PasswordReset />} />
        <Route
          path="/"
          element={<ProtectedRoute path="/" element={ProductListingsModule} />}
        />
        <Route
          path="/auth"
          element={<ProtectedAuthRoute path="/" element={<Home />} />}
        />
        <Route
          path="/profile"
          element={<ProtectedRoute path="/" element={ProfileMain} />}
        />
        <Route
          path="/profile/:email"
          element={<ProtectedRoute path="/profile/:email" element={ProfileMain} />}
        />
        <Route
          path="/editListing/:productID"
          element={<ProtectedRoute path="/editListing/:productID" element={EditListing} />}
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
