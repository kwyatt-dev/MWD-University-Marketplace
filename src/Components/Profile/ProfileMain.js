import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileProducts from "./ProfileProducts";
import { useParams } from "react-router-dom";
import Parse from "parse/dist/parse.min.js";

// Top-Level Profile Page
const ProfileMain = () => {

  // Get email param if exists
  const { email } = useParams();

  // If there is not an email param or profile is current user
  if (!email || (email === Parse.User.current().attributes.email)) {
    // Profile is current details
    var current = true;
    var userEmail = Parse.User.current().attributes.email;
  }
  else {
    // Profile is other details
    var current = false;
    var userEmail = email;
  }

  return (
    <div className="profile">
      <div class="main-title">
      <h1>Marketplace Profile</h1>
      </div>
      <div class="flex-container">
      <ProfileHeader class="flex-child" curUser={current} email={userEmail} />
      <ProfileProducts class="flex-child" curUser={current} email={userEmail} />
      </div>
    </div>
  );
};

export default ProfileMain;