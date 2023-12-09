import React, { useState } from "react";

function Profile(props) {
  const [fields, setFields] = useState([{ value: "", isVisible: true }]); // manage iput fields

  // Function to handle adding new fields
  const handleAddField = () => {
    const newFields = [...fields, { value: "", isVisible: true }];
    setFields(newFields); // Update the state with the new array of fields
  };

  const handleRemoveField = (index) => {
    const updatedFields = fields.filter((field, i) => i !== index); // Remove the field at the specified index
    setFields(updatedFields);
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
    const allValues = fields.map((obj) => obj.value);
    props.addTheNewSkills(allValues); // Pass the array of fields to parent component
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index}>
            {field.isVisible && (
              <div>
                <input
                  type="text"
                  value={field.value}
                  onChange={(e) => handleFieldChange(index, e)} // Handle input change for each field
                />
                <button type="button" onClick={handleAddField}>
                  +
                </button>
                <button type="button" onClick={() => handleRemoveField(index)}>
                  -
                </button>
              </div>
            )}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Profile;
