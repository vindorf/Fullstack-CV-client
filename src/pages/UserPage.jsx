import React from "react";
import { Link } from "react-router-dom";

function UserPage() {
  return (
    <div>
      <h1>hallo from the userpage</h1>

      <Link to="/create-resume">Create resumé</Link>
    </div>
  );
}

export default UserPage;
