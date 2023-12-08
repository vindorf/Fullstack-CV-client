import { useState } from "react";
import React from "react";

function Profile() {
  const [profile, setProfile] = useState("");

  return (
    <div>
      <h3>PROFILE</h3>
      <form>
        <input
          type="text"
          name="profile"
          placeholder="Introduce yourself!"
          value={props.firstName}
          onChange={handleFirstNameChange}
        />
      </form>
    </div>
  );
}

export default Profile;
