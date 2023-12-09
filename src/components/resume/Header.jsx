import React from "react";

function Header(props) {
  const handleFirstNameChange = (e) => props.onFirstNameChange(e.target.value);
  const handleLastNameChange = (e) => props.onLastNameChange(e.target.value);


  return (
    <div>
      <form>
        <input
          type="text"
          name="firstname"
          placeholder="first name"
          value={props.firstName}
          onChange={handleFirstNameChange}
        />
        <input
          type="text"
          name="lastname"
          placeholder="last name"
          value={props.lastName}
          onChange={handleLastNameChange}
        />
      </form>
    </div>
  );
}

export default Header;
