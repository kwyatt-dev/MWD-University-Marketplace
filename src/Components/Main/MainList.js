import React, { useEffect, useState } from "react";
import { getAllProductListings } from "../../Services/ProductListingService.js";

var postCheck = false;

const MainList = () => {
  const [productListings, setListings] = useState([]);

  if (!postCheck) {
    //createUser(1, "John", "Mayer", "jmayer@gmail.com", "wonderland");
    //postCheck = true;
  }

  useEffect(() => {
    getAllProductListings().then((productListings) => {
      setListings(productListings);
    });
    console.log(productListings);
  }, []);

  return (
    <div>
      This is the main list component.
      {productListings.length > 0 && (
        <ul>
          {productListings.map((productListing) => (
            <li key={productListing.attributes.SellerEmail}>
              {productListing.attributes.SellerName},{" "}
              {productListing.attributes.ProductName}
            </li>
          ))}
        </ul>
      )}
      <hr />
    </div>
  );
};

export default MainList;
