import React from "react";
import UsersList from "./UsersList";

// This Component should only be visible to admins. Users may sign up/log in using another component in the future.
const UsersModule = () => {
  return (
    <div>
      <h1> Feature-4 Kickoff Ancient Japan Dropouts </h1>
      <UsersList />
    </div>
  );
};

export default UsersModule;
