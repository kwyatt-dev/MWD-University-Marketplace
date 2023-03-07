// import React from "react";
import Parse from "parse/dist/parse.min.js";

// const url =
//   "https://my-json-server.typicode.com/kellybuchanan/WebDev-Spring2021";

// Read
export async function getAllUsers(){
    const User = Parse.Object.extend("User");
    const query = new Parse.Query(User);
    // You can also query by using a parameter of an object
    // query.equalTo('objectId', 'xKue915KBG');
    try {
      const results = await query.find();
      console.log("Results: ", results);
      return results;
      //return listingsArray;
    } catch (error) {
      console.error("Error while fetching User", error);
    }
}

export async function getUser(objectId){
  const User = Parse.Object.extend("User");
  const query = new Parse.Query(User);
  console.log("User id:", objectId);
  // You can also query by using a parameter of an object
  // query.equalTo('objectId', 'xKue915KBG');
  try {
    const user = await query.get(objectId);
    console.log("User: ", user);
    return user;
    //return listingsArray;
  } catch (error) {
    console.error("Error while fetching User", error);
  }
}
// Delete: not currently in use due to auth restrictions
export async function deleteProductListing(objectId) {
  const query = new Parse.Query('ProductListing');
  try {
    // here you put the objectId that you want to delete
    const object = await query.get(objectId);
    try {
      const response = await object.destroy();
      console.log('Deleted ParseObject', response);
    } catch (error) {
      console.error('Error while deleting ParseObject', error);
    }
  } catch (error) {
    console.error('Error while retrieving ParseObject', error);
  }
}
