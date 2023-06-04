import { useState, useRef } from "react";

const useFields = () => {
  const [inputValues, setInputValues] = useState({
    field1: {text: "", editMode: false},
    field2: "",
    field3: "",
    // editMode: true,
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name] : value,
    }));
    console.log(value, name)
  };

  const handleSave = (e, inputName) => {
    e.preventDefault();
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [inputName]: {editMode : true},
    }));
    console.log(inputName)
  };

  const handleEdit = (e, inputName) => {
    e.preventDefault();
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [inputName]: {editMode : false},
    }));
    inputRef.current.focus();
    console.log(inputName)
  };

  const inputRef = useRef(null);
  
  return {
    inputValues,
    handleChange,
    handleSave,
    handleEdit,
    inputRef,
  };
};

export default useFields;
