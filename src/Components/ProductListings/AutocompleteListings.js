import React, { useState, useEffect} from "react";
import { Autocomplete, TextField } from "@mui/material";
import ProductListingsListItem from "./ProductListingsListItem.js";
export default function AutocompleteListings(currListings) {


    const options = [];
    // listing & seller options
    for (let i = 0; i < currListings.currListings.length; i++) {
        options.push(
            {
                name: `${currListings.currListings[i].attributes.SellerName} - ${currListings.currListings[i].attributes.ProductName}(${currListings.currListings[i].attributes.SellerEmail})`,
                attributes: currListings.currListings[i]
            }
        );
    }

    const [itemList, setItemList] = useState(options);
    const [itemSelected, setItemSelected] = useState([]);

    const handleChange = () => (event, value) => {
        setItemSelected(value);
    }
    // console.log(itemSelected[0].name);
    return (
        <div>
            <Autocomplete
                multiple
                value={itemSelected}
                disablePortal
                id="combo-box-demo"
                options={itemList}
                getOptionLabel={(option) => option.name}
                getOptionSelected={(option, value) => option.name === value.name}
                onChange={handleChange()}
                filterSelectedOptions
                fullWidth
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} variant='outlined' placeholder='Select items...'
                    label="Select items" />}
            />
            {itemSelected.length > 0 && (
                <div>
                    {itemSelected.map((itemFiltered) => (
                        <li key={itemFiltered.attributes.attributes.SellerEmail}>
                            {<ProductListingsListItem
                                objectId={itemFiltered.attributes.id}
                                productName={itemFiltered.attributes.attributes.ProductName}
                                sellerEmail={itemFiltered.attributes.attributes.SellerEmail}
                                sellerName={itemFiltered.attributes.attributes.SellerName}
                                user={itemFiltered.attributes.attributes.User}
                                price={itemFiltered.attributes.attributes.Price}
                            />}
                        </li>
                    ))}
                </div>
            )}
        </div>
    )
}