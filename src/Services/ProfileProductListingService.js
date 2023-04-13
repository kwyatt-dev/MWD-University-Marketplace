// import React from "react";
import Parse from "parse/dist/parse.min.js";

// const url =
//   "https://my-json-server.typicode.com/kellybuchanan/WebDev-Spring2021";

// Get All Product Listings
export async function getProductListingsByProfile(profileID) {

    // TODO: ADJUST FOR ONLY PROFILE 


  const ProductListing = Parse.Object.extend("ProductListing");
  const query = new Parse.Query(ProductListing);
  // You can also query by using a parameter of an object
  // query.equalTo('objectId', 'xKue915KBG');
  try {
    const results = await query.find();
    console.log("Results: ", results);
    return results;

    //return listingsArray;
  } catch (error) {
    console.error("Error while fetching ProductListing", error);
  }
}

// Delete
/*
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
}*/