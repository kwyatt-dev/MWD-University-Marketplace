import React from "react";
import UsersList from "./UsersList";

// The cleanup of this component will be done after feature 6 wraps up.

const UsersModule = () => {
  return (
    <div>
      <div className="main-title">
      <h1>Current Users</h1>
      </div>
      <UsersList />
    </div>
  );
};

export default UsersModule;
