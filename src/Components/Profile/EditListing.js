import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getProductByID } from "../../Services/ProfileProductListingService";

const EditListing = () => {

    const { productID } = useParams();

    const [productDetails, setDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getProductByID(productID).then((details) => {
          setDetails(details);
          setIsLoading(false);
        });
        
    }, [productID]);

    console.log("EDIT LISTING:" +productDetails[0].attributes.Price);

    return (
        <div>
            <h1>Edit Listing</h1>
            {!isLoading && (
                <form>
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
                </form>
            )}
        </div>
    );
};

export default EditListing;