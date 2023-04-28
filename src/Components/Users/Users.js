import React from "react";
import UsersList from "./UsersList";

// This Component should only be visible to admins. Users may sign up/log in using another component in the future.
const UsersModule = () => {
  return (
    <div>
      <div className="main-title">
      <h1> Current Users</h1>
      </div>
      <UsersList />
    </div>
  );
};

export default UsersModule;
