import { useState, useRef } from "react";
import DataGoals from "../components/DataGoals";

const useFields = () => {
  const [inputValues, setInputValues] = useState({
    field1: "",
    field2: "",
    field3: "",
    dataField: false,
    editMode: true,
  });
  
  const dataField = () => {
    return (
      <div>
        {dataField && <DataGoals />}
      </div>
    )
  }
  
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
      dataField: true,
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
    dataField,
    inputRef,
  };
};

export default useFields;
