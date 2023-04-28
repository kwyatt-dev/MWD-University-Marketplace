import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { addNewListing, getProductByID, updateProductByID } from "../../Services/ProfileProductListingService";
import { useNavigate } from "react-router-dom";

const AddNewListing = () => {

    const navigate = useNavigate();

    const addListing = () => {
        var name = document.getElementById("editListingForm").elements[0].value;
        var price = document.getElementById("editListingForm").elements[1].value;
        addNewListing(name, price);
        navigate("/profile");
    }


    return (
        <div>
            <div class="main-title">
                <h1>New Goods...</h1>
            </div>
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
                            required
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
                            required
                        />
                    </div>
                    <br/>
                    <div>
                        <button class="btn btn-primary" id="auth-button" onClick={addListing}>Add New Listing</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNewListing;