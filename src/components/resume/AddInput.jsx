import { useState } from "react";
function AddInput() {
  const [input, setInput] = useState([]);

  const inputArr = [
    {
      name: "start-year",
      type: "text",
      id: 1,
      value: "",
    },
    {
      name: "end-year",
      type: "text",
      id: 1,
      value: "",
    },
    {
      name: "company",
      type: "text",
      id: 2,
      value: "",
    },
    {
      name: "role",
      type: "text",
      id: 3,
      value: "",
    },
    {
      name: "description",
      type: "text",
      id: 4,
      value: "",
    },
  ];

  const [fields, setFields] = useState(inputArr);
  const addInput = () => {
    setFields((fieldsArray) => {
      return [
        ...fieldsArray,
        {
          name: "start-year",
          type: "text",
          id: 1,
          value: "",
        },
        {
          name: "end-year",
          type: "text",
          id: 1,
          value: "",
        },
        {
          name: "company",
          type: "text",
          id: 2,
          value: "",
        },
        {
          name: "role",
          type: "text",
          id: 3,
          value: "",
        },
        {
          name: "description",
          type: "text",
          id: 4,
          value: "",
        },
      ];
    });
  };
  console.log(fields);

  console.log("INPUT ==>", input);

  const handleChange = (e, index) => {
    const newArr = fields.map((item, i) => {
      if (i === index) {
        return { ...item, value: e.target.value };
      }
      return item;
    });
    setFields(newArr);
    setInput(newArr.map((item) => item.value));
  };

  const reload = (e) => {
    e.preventDefault();
    setFields(inputArr); // basis array
    setInput([]); //
  };

  return (
    <div>
      <h2>Languages</h2>
      <button onClick={addInput} style={{ margin: "10px" }}>
        +
      </button>
      <button onClick={reload} style={{ margin: "10px" }}>
        NEW
      </button>
      {fields.map((item, i) => {
        return (
          <div key={i} className="workexpinput">
            <input
              name={item.name}
              placeholder={item.name}
              onChange={(e) => handleChange(e, i)}
              type={item.value}
              value={item.value}
              id={i}
            />
          </div>
        );
      })}
    </div>
  );
}
export default AddInput;
