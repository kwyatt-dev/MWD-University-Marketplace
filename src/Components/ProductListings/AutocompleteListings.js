import React from "react";
import { Autocomplete, TextField} from "@mui/material";
export default function AutocompleteListings(currListings) {

    const options = [];
    // listing & seller options
    for (let i=0; i<currListings.currListings.length; i++) {
        options.push(currListings.currListings[i].attributes.ProductName);
        options.push(currListings.currListings[i].attributes.SellerName);
    }
    
    return (
        <div>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={options}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Search Items/ Sellers" />}
            />
        </div>
    )
}