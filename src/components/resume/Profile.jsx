import React from "react";

import { useState } from "react";

function Profile() {
  const [fields, setFields] = useState([{ value: "", isVisible: true }]); // State to manage form fields

  const [hideForm, sethideForm] = useState("show");
  const [showResumeResult, setShowResumeResult] = useState("hide");
  const [removedFields, setRemovedFields] = useState([]); // State to store removed fields

  // Function to handle adding new fields
  const handleAddField = () => {
    const newFields = [...fields, { value: "", isVisible: true }];
    setFields(newFields); // Update the state with the new array of fields
  };

  const handleRemoveField = (index) => {
    const updatedFields = fields.filter((field, i) => i !== index); // Remove the field at the specified index
    setFields(updatedFields); // Update the state with the updated array of fields
  };

  // Function to handle input change in each field
  const handleFieldChange = (index, event) => {
    const newFields = [...fields]; // Create a copy of the fields array
    newFields[index].value = event.target.value; // Update the value of the specific field
    setFields(newFields); // Update the state with the new array of fields
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    sethideForm("hide");
    setShowResumeResult("show");

    console.log("Form submitted:", fields);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index}>
            {field.isVisible && (
              <div className={`${hideForm}`}>
                <input
                  type="text"
                  value={field.value}
                  onChange={(e) => handleFieldChange(index, e)} // Handle input change for each field
                />
                <button type="button" onClick={() => handleRemoveField(index)}>
                  Remove skill
                </button>
              </div>
            )}
          </div>
        ))}
        <button type="button" onClick={handleAddField}>
          Add skill
        </button>
        <button type="submit">Save all skills</button>
      </form>
    </div>
  );
}

export default Profile;
