import React, { useEffect, useState } from "react";
import { getAllProductListings } from "../../Services/ProductListingService.js";
import ProductListingsListItem from "./ProductListingsListItem.js";
import AutocompleteListings from "./AutocompleteListings";
import "../../index.css";

const ProductListingsList = () => {
  const [productListings, setListings] = useState([]);

  useEffect(() => {
    getAllProductListings().then((productListings) => {
      setListings(productListings);
    });
  }, []);

  return (
    <div>

      {productListings.length > 0 && (
        <div class="flex-container">
          <div class="flex-child auto">
            <h4 className="prod-h4">Search Items or Sellers</h4>
            <AutocompleteListings
              currListings={productListings} />
          </div>
          <div class="flex-child listing">
            <h4 className="prod-h4">Current Listings</h4>
            <ul class="list-group list-group-flush">
              {/* Passing listing info as props */}
              {productListings.map((productListing) => (
                <li key={productListing.attributes.SellerEmail} class="list-group-item">
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
        </div>
      )}
    </div>
  );
};

export default ProductListingsList;