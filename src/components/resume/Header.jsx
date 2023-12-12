import React from "react";

function Header(props) {
  const handleResumeTitleChange = (e) =>
    props.onResumeTitleChange(e.target.value);

  return (
    <div>
      <form className="create-resume-form">
        <input
          type="text"
          className="form-control create-resume-input"
          name="resumeTitle"
          placeholder="Resume Title"
          value={props.resumeTitle}
          onChange={handleResumeTitleChange}
        />
      </form>
    </div>
  );
}

export default Header;
