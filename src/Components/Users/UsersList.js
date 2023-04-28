import React, { useEffect, useState } from "react";
import {getAllUsers} from "../../Services/UserService.js";
import UsersListItem from "./UsersListItem.js";

const UsersList = () => {
  const [users, setListings] = useState([]);


  useEffect(() => {
    getAllUsers().then((users) => {
      setListings(users);
      console.log(users[0].attributes);
    });
  }, []);

  return (
    <div>
      TODO: clean up the user object
      {users.length > 0 && (
        <ul className="user-list">
          {/* Passing listing info as props */}
          {users.map((user) => (
            <li key={user.attributes.username}>
              {<UsersListItem 
              objectId={user.id}
              username={user.attributes.username}
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