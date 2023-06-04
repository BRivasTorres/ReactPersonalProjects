import { useState, useRef } from "react";

const useFields = () => {
  const [inputValues, setInputValues] = useState({
    field1: {text: "", editMode: true},
    field2: {text: "", editMode: true},
    field3: "",
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name] : {text:value},
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
    inputRefs[inputName].current.focus();
    console.log(inputName)
  };

  const inputRefs = {
    field1: useRef(null),
    field2: useRef(null),
    field3: useRef(null)
  };
  
  return {
    inputValues,
    handleChange,
    handleSave,
    handleEdit,
    inputRefs,
  };
};

export default useFields;
