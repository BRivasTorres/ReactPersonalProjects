import { useState, useRef, useEffect } from "react";

const useFields = () => {
  const [inputValues, setInputValues] = useState({
    field1: {text: "", editMode: false},
    field2: {text: "", editMode: false},
    field3: {text: "", editMode: false},
  });

  useEffect(() => {
    const savedValue = JSON.parse(localStorage.getItem("inputValues"))
    if(savedValue) {
      setInputValues(savedValue)
    }
  },[])
  
  useEffect(() => {
    localStorage.setItem("inputValues", JSON.stringify(inputValues))
  }, [inputValues])
    
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name] : {text:value},
    }));
  };

  const handleSave = (e, inputName) => {
    e.preventDefault();
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [inputName]: {editMode : true},
    }));
  };

  const handleEdit = (e, inputName) => {
    e.preventDefault();
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [inputName]: {editMode : false},
    }));
    inputRefs[inputName].current.focus();
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
