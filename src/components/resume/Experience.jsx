import React from "react";

function Experience(props) {
  const handleInstituteInput = (e) => props.onInstituteChange(e.target.value);
  const handleDegreeInput = (e) => props.onDegreeChange(e.target.value);
  const handleStartYearInput = (e) => props.onStartYearChange(e.target.value);
  const handleEndYearInput = (e) => props.onEndYearChange(e.target.value);
  const handleExperienceDescriptionInput = (e) =>
    props.onExperienceDescriptionChange(e.target.value);

  return (
    <div>
      <h4>Add your education</h4>

      <form>
        <input
          type="text"
          name="startYear"
          value={props.startYear}
          placeholder="From (year)"
          onChange={handleStartYearInput}
        />

        <input
          type="text"
          name="endYear"
          value={props.endYear}
          placeholder="To (year)"
          onChange={handleEndYearInput}
        />
        <br />
        <input
          type="text"
          name="instituteName"
          placeholder="institute"
          value={props.instituteName}
          onChange={handleInstituteInput}
        />
        <br />
        <input
          type="text"
          name="degreeName"
          placeholder="degree"
          value={props.degreeName}
          onChange={handleDegreeInput}
        />
        <br />

        <input
          type="text"
          name="description"
          value={props.description}
          placeholder="Describe your experience"
          onChange={handleExperienceDescriptionInput}
        />
      </form>
    </div>
  );
}

export default Experience;
