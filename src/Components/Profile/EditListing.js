import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getProductByID, updateProductByID } from "../../Services/ProfileProductListingService";
import { useNavigate } from "react-router-dom";

const EditListing = () => {

    const { productID } = useParams();

    const [productDetails, setDetails] = useState([]);

    const navigate = useNavigate();
    const updateListing = () => {
        console.log("INSIDE UPDATE LISTING");
        //console.log(document.getElementById("editListingForm").elements[0].value);
        var name = document.getElementById("editListingForm").elements[0].value;
        if (name == "") {
            name = document.getElementById("editListingForm").elements[0].placeholder;
        }
        var price = document.getElementById("editListingForm").elements[1].value;
        if (price == "") {
            price = document.getElementById("editListingForm").elements[1].placeholder;
        }
        console.log(price);
        updateProductByID(productID, name, price);
        navigate("/profile");
    }

    useEffect(() => {
        getProductByID(productID).then((details) => {
          setDetails(details);
        });
        
    }, [productID]);


    return (
        <div>
            <h1>Edit Listing</h1>
            {productDetails.length > 0 && (
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
                    <div>
                        <button onClick={updateListing}>Update Listing</button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default EditListing;