// import React from "react";
import Parse from "parse/dist/parse.min.js";

// const url =
//   "https://my-json-server.typicode.com/kellybuchanan/WebDev-Spring2021";

// Get All Product Listings
export async function getProductListingsByEmail(userEmail) {

  const ProductListing = Parse.Object.extend("ProductListing");
  const query = new Parse.Query(ProductListing);
  query.equalTo("SellerEmail", userEmail);
  // You can also query by using a parameter of an object
  // query.equalTo('objectId', 'xKue915KBG');
  try {
    const results = await query.find();
    console.log("Results Profile Product: ", results);
    return results;

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

// Update Product By ID
export async function updateProductByID(objectId, productName, productPrice) {
  console.log("Inside updateProductByID");

  const query = new Parse.Query('ProductListing');

  try {
    const object = await query.get(objectId);
    object.set("ProductName", productName);
    object.set("Price", Number(productPrice));
    
    try {
      const response = await object.save();
    } catch (error) {
      console.error('Error while updating listing v1', error);
    }

  } catch (error) {
    console.error('Error while updating listing v2', error);
  }
}

// Add New Listing
export async function addNewListing(productName, productPrice) {
  console.log("Inside addNewListing");

  const NewListing = new Parse.Object("ProductListing");
  NewListing.set("User", Parse.User.current());
  var userName = Parse.User.current().attributes.firstName + " " + Parse.User.current().attributes.lastName;
  NewListing.set("SellerName", userName);
  NewListing.set("SellerEmail", Parse.User.current().attributes.email);
  NewListing.set("ProductName", productName);
  NewListing.set("Price", Number(productPrice));

  try {

    const result = await NewListing.save();

  } catch (error) {
    console.error('Error while updating listing v2', error);
  }
}
