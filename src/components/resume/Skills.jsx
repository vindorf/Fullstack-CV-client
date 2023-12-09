import React from "react";

function Skills() {
  const handleSkillChange = (e) => props.onSkillChange(e.target.value);
  return (
    <div>
      <h3>Hello from the skills-component</h3>
      <form>
        <input
          type="text"
          name="skill"
          placeholder="skill"
          value={props.skills}
          onChange={handleSkillChange}
        />
      </form>
    </div>
  );
}

export default Skills;

// NOTE skill has to still be connected to the resume overview with the functionalities to set the Skill UseState and save it in the resume + database
