import React from "react";
import { useState } from "react";

function Experience(props) {
  const handleInstituteInput = (e) => props.onInstituteChange(e.target.value);
  const handleDegreeInput = (e) => props.onDegreeChange(e.target.value);
  const handleStartYearInput = (e) => props.onStartYearChange(e.target.value);
  const handleEndYearInput = (e) => props.onEndYearChange(e.target.value);
  const handleExperienceDescriptionInput = (e) =>
    props.onExperienceDescriptionChange(e.target.value);

  return (
    <div>
      <h1>Hello from the experience component</h1>
      <h4>Add your {} experience </h4>

      <form>
        <input
          type="text"
          name="institute"
          placeholder="Institute"
          value={props.institute}
          onChange={handleInstituteInput}
        />

        <input
          type="text"
          name="degree"
          placeholder="degree"
          value={props.degree}
          onChange={handleDegreeInput}
        />

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
