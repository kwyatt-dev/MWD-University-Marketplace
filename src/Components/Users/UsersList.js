import React, { useEffect, useState } from "react";
import {getAllUsers} from "../../Services/UserService.js";
import UsersListItem from "./UsersListItem.js";

var postCheck = false;

const UsersList = () => {
  const [users, setListings] = useState([]);

  if (!postCheck) {
    //createUser(1, "John", "Mayer", "jmayer@gmail.com", "wonderland");
    //postCheck = true;
  }

  useEffect(() => {
    getAllUsers().then((users) => {
      setListings(users);
      console.log(users[0].attributes);
    });
  }, []);

  return (
    <div>
        Active Users:
      {users.length > 0 && (
        <ul>
          {/* Passing listing info as props */}
          {users.map((user) => (
            <li key={user.attributes.username}>
              {<UsersListItem 
              objectId={user.id}
              firstName={user.attributes.firstName}
              lastName={user.attributes.lastName}
              dorm={user.attributes.Dorm}
              />}
            </li>
          ))}
        </ul>
      )}
      <hr />
    </div>
  );
};

export default UsersList;