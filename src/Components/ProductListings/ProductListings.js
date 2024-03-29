import React from "react";
import ProductListingsList from "./ProductListingsList";

// Top-level marketplace page
const ProductListingsModule = () => {
  return (
    <div>
      <div class="main-title">
        <h1>Tri-Campus Secondhand Marketplace</h1>
      </div>
      <ProductListingsList />
    </div>
  );
};

export default ProductListingsModule;
