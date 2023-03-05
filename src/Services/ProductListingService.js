// import React from "react";
import Parse from "parse/dist/parse.min.js";

// const url =
//   "https://my-json-server.typicode.com/kellybuchanan/WebDev-Spring2021";

export async function getAllProductListings() {
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
