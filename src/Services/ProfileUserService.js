// import React from "react";
import Parse from "parse/dist/parse.min.js";

// const url =
//   "https://my-json-server.typicode.com/kellybuchanan/WebDev-Spring2021";

// Get Profile of Current User
export async function getProfileByCurrentUser() {

  const Profile = Parse.Object.extend("Profile");
  const query = new Parse.Query(Profile);
  query.equalTo("User", Parse.User.current());
  //for any user: query.equalTo("email", email)
  // You can also query by using a parameter of an object
  // query.equalTo('objectId', 'xKue915KBG');
  try {
    const results = await query.find();
    console.log("Results Profile Details: ", results);
    return results;

    //return listingsArray;
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
  //for any user: query.equalTo("email", email)
  // You can also query by using a parameter of an object
  // query.equalTo('objectId', 'xKue915KBG');
  try {
    const results = await query.find();
    console.log("Results Profile Details: ", results);
    return results;

    //return listingsArray;
  } catch (error) {
    console.error("Error while fetching ProductListing", error);
  }
}