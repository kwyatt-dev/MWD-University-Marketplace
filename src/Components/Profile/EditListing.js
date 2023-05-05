import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductByID, updateProductByID } from "../../Services/ProfileProductListingService";
import { useNavigate } from "react-router-dom";

const EditListing = () => {

    const { productID } = useParams();      // get productID from URL

    const [productDetails, setDetails] = useState([]);

    const navigate = useNavigate();
    const updateListing = () => {
        var name = document.getElementById("editListingForm").elements[0].value;
        if (name === "") {
            name = document.getElementById("editListingForm").elements[0].placeholder;
        }
        var price = document.getElementById("editListingForm").elements[1].value;
        if (price === "") {
            price = document.getElementById("editListingForm").elements[1].placeholder;
        }
        console.log(price);
        updateProductByID(productID, name, price);      // service to update the product by its ID
        navigate("/profile");
    }

    useEffect(() => {
        getProductByID(productID).then((details) => {
            setDetails(details);
        });

    }, [productID]);


    // Form to edit an existing listing.
    return (
        <div>
            <div class="main-title">
                <h1>Edit Listing</h1>
            </div>
            {productDetails.length > 0 && (
                <div class="edit-list-form">
                    <form id="editListingForm">
                        <div className="form-group">
                            <label>Product Name</label>
                            <br />
                            <input
                                type="text"
                                className="form-control"
                                id="product-name-input"
                                name="productName"
                                placeholder={productDetails[0].attributes.ProductName}
                            />
                        </div>
                        <div className="form-group">
                            <label>Price</label>
                            <br />
                            <input
                                type="text"
                                className="form-control"
                                id="price-input"
                                name="price"
                                placeholder={productDetails[0].attributes.Price}
                            />
                        </div>
                        <br />
                        <div>
                            <button class="btn btn-primary" id="auth-button" onClick={updateListing}>Update Listing</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default EditListing;