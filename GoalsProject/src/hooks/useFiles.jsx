import { useState, useRef } from "react";

const useFields = () => {
  const [inputValues, setInputValues] = useState({
    field1: "",
    field2: "",
    field3: "",
    editMode: true,
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]:value,
    }));
  };

  const handleSave = (e, inputName) => {
    e.preventDefault();
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      editMode: false,
    }));
    console.log(inputName)
  };

  const handleEdit = (e, inputName) => {
    e.preventDefault();
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      editMode: true,
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
