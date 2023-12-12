import { useState } from "react";
function WorkExperience() {
  const [workExperience, setWorkExperience] = useState([]);

  const inputArr = ["startYear", "endYear", "company", "role", "description"];

  const [fields, setFields] = useState(
    inputArr.reduce((acc, curr) => {
      acc[curr] = "";
      return acc;
    }, {})
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setWorkExperience((prevExperience) => [...prevExperience, { ...fields }]);
    console.log(workExperience);
    setFields(
      inputArr.reduce((acc, curr) => {
        acc[curr] = "";
        return acc;
      }, {})
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {inputArr.map((fieldName, index) => (
          <div key={index} className="workexpinput">
            <li>
              {fieldName}
              {"  "}
              <input
                name={fieldName}
                placeholder={fieldName}
                onChange={handleChange}
                value={fields[fieldName]}
              />
            </li>
          </div>
        ))}
      </ul>
      <button type="submit" style={{ margin: "10px" }}>
        Submit
      </button>

      <div>
        <h4>Saved work experiences:</h4>
        {workExperience.map((exp, index) => (
          <div key={index}>
            <p>Start Year: {exp.startYear}</p>
            <p>End Year: {exp.endYear}</p>
            <p>Company: {exp.company}</p>
            <p>Role: {exp.role}</p>
            <p>Description: {exp.description}</p>
            <br />
          </div>
        ))}
      </div>
    </form>
  );
}
export default WorkExperience;
