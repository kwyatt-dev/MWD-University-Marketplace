// import React from "react";
import Parse from "parse/dist/parse.min.js";

// const url =
//   "https://my-json-server.typicode.com/kellybuchanan/WebDev-Spring2021";

// Get All Product Listings
export async function getProductListingsByEmail(userEmail) {

    // TODO: ADJUST FOR ONLY PROFILE 


  const ProductListing = Parse.Object.extend("ProductListing");
  const query = new Parse.Query(ProductListing);
  query.equalTo("SellerEmail", userEmail);
  // You can also query by using a parameter of an object
  // query.equalTo('objectId', 'xKue915KBG');
  try {
    const results = await query.find();
    console.log("Results Profile Product: ", results);
    return results;

    //return listingsArray;
  } catch (error) {
    console.error("Error while fetching ProfileProductList", error);
  }
}

// Get Product By ID
export async function getProductByID(objectId) {
  const query = new Parse.Query('ProductListing');
  query.equalTo("objectId", objectId);

  console.log("INSIDE GETPRODUCTBYID");
  try {
    const results = await query.find();
    console.log("Results getProductByID: ", results);
    return results;

  } catch (error) {
    console.error('Error while retrieving ParseObject', error);
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