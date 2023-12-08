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

  console.log(arr);
  console.log("INPUT ==>", input);

  const removeInput = (index) => {
    const newArr = arr.filter((item, i) => i !== index);
    setArr(newArr);
    setInput(newArr.map((item) => item.value));
  };

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

  return (
    <div>
      <h2>Languages</h2>
      {arr.map((item, i) => {
        return (
          <div key={i}>
            <input
              name="language"
              onChange={(e) => handleChange(e, i)}
              type={item.value}
              id={i}
            />
            <button onClick={addInput}>+</button>
            <button onClick={() => removeInput(i)}>-</button>
          </div>
        );
      })}
    </div>
  );
}
export default AddInput;
