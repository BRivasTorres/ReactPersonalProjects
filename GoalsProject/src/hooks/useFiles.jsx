import { useState, useRef } from "react";

const useFields = () => {
  const [inputValues, setInputValues] = useState({
    field1: "",
    field2: "",
    field3: "",
    editMode: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      editMode: false,
    }));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      editMode: true,
    }));
    inputRef.current.focus();
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
