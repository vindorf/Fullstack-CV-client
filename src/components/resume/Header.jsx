import React from "react";

function Header(props) {
  const handleResumeTitleChange = (e) =>
    props.onResumeTitleChange(e.target.value);

  return (
    <div>
      <form>
        <input
          type="text"
          name="resumeTitle"
          placeholder="resume title"
          value={props.resumeTitle}
          onChange={handleResumeTitleChange}
        />
      </form>
    </div>
  );
}

export default Header;
