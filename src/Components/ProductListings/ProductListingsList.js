import React, { useEffect, useState } from "react";
import { getAllProductListings } from "../../Services/ProductListingService.js";
import ProductListingsListItem from "./ProductListingsListItem.js";
import AutocompleteListings from "./AutocompleteListings";
var postCheck = false;

const ProductListingsList = () => {
  const [productListings, setListings] = useState([]);

  if (!postCheck) {
    //createUser(1, "John", "Mayer", "jmayer@gmail.com", "wonderland");
    //postCheck = true;
  }

  useEffect(() => {
    getAllProductListings().then((productListings) => {
      setListings(productListings);
    });
  }, []);

  return (
    <div>

      {productListings.length > 0 && (
        <div>
          <AutocompleteListings 
            currListings={productListings}/>
          <ul>
            {/* Passing listing info as props */}
            {productListings.map((productListing) => (
              <li key={productListing.attributes.SellerEmail}>
                {<ProductListingsListItem
                  objectId={productListing.id}
                  productName={productListing.attributes.ProductName}
                  sellerEmail={productListing.attributes.SellerEmail}
                  sellerName={productListing.attributes.SellerName}
                  user={productListing.attributes.User}
                  price={productListing.attributes.Price}
                />}
              </li>
            ))}
          </ul>
        </div>
      )}
      <hr />
    </div>
  );
};

export default ProductListingsList;