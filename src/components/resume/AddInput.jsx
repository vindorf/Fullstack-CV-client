import { useState } from "react";
function AddInput() {
  const [input, setInput] = useState([]);
  const inputArr = [
    {
      type: "text",
      id: 1,
      value: "",
    },
  ];

  console.log(input);
  const [arr, setArr] = useState(inputArr);
  const addInput = () => {
    setArr((s) => {
      return [
        ...s,
        {
          type: "text",
          value: "",
        },
      ];
    });
  };
  console.log(arr); // this array doesnt have the value of the input and does not go to the DetailResumePage.jsx

  console.log("INPUT ==>", input);

  const handleChange = (e, index) => {
    const newArr = arr.map((item, i) => {
      if (i === index) {
        return { ...item, value: e.target.value };
      }
      return item;
    });
    setArr(newArr);
    setInput(newArr.map((item) => item.value));
  };

  const reload = (e) => {
    e.preventDefault();
    setArr(inputArr); // this array
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
      {arr.map((item, i) => {
        return (
          <div key={i}>
            <input
              onChange={(e) => handleChange(e, i)}
              type={item.value}
              value={item.value}
              id={i}
            />
            <br></br>
          </div>
        );
      })}
    </div>
  );
}
export default AddInput;
