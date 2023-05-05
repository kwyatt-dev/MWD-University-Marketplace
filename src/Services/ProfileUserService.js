// import React from "react";
import Parse from "parse/dist/parse.min.js";

// const url =
//   "https://my-json-server.typicode.com/kellybuchanan/WebDev-Spring2021";

// Get Profile of Current User
export async function getProfileByCurrentUser() {

  const Profile = Parse.Object.extend("Profile");
  const query = new Parse.Query(Profile);
  query.equalTo("User", Parse.User.current());

  // You can also query by using a parameter of an object
  // query.equalTo('objectId', 'xKue915KBG');
  try {
    const results = await query.find();
    console.log("Results Profile Details: ", results);
    return results;

  } catch (error) {
    console.error("Error while fetching ProductListing", error);
  }
}

// Get Profile of Current User
export async function getProfileByEmail(userEmail) {

  console.log("IN PROFILE BY EMAIL");

  const Profile = Parse.Object.extend("Profile");
  const query = new Parse.Query(Profile);
  query.equalTo("Email", userEmail);
  
  // You can also query by using a parameter of an object
  // query.equalTo('objectId', 'xKue915KBG');
  try {
    const results = await query.find();
    console.log("Results Profile Details: ", results);
    return results;

  } catch (error) {
    console.error("Error while fetching ProductListing", error);
  }
}

// Update Profile
export async function updateCurrentProfile(email, firstName, lastName, dorm, paymentType) {
  console.log("Inside updateCurrentProfile");

  const Profile = Parse.Object.extend("Profile");
  const queryProfile = new Parse.Query(Profile);
  queryProfile.equalTo("Email", email);

  try {
    const results = await queryProfile.find();

    try {
      const query = new Parse.Query('Profile');
      const object = await query.get(results[0].id);
      object.set("FirstName", firstName);
      object.set("LastName", lastName);
      object.set("Dorm", dorm);
      object.set("Payment", paymentType);

      try {
        const response = await object.save();
      } catch (error) {
        console.error('Error while updating profile v1', error);
      }

    } catch (error) {
      console.error('Error while updating profile v2', error);
    }

  } catch (error) {
    console.error('Error while updating profile v3', error);
  }
}