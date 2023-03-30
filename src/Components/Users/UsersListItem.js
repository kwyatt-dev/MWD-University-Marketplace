import React from "react";
export default function UsersListItem(props){
    return (
        <div>
            {props.firstName} {props.lastName} from {props.dorm} Hall
        </div>
    )
}

