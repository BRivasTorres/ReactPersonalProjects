import InputButtons from "./InputButtons"
import useFields from "../hooks/useFiles";
import DataGoals from "./DataGoals";

const Fields = () => {
    const { inputValues, handleChange, handleSave, handleEdit, inputRefs } = useFields();    
    return (
        <div>
            <h2 className='text-[1.5rem]'>Fields to improve</h2>
            <form className='flex flex-col'>
                <div>
                    <input
                        className='input-styles'
                        type="text"
                        name='field1'
                        placeholder='Put the field to improve'
                        value={inputValues.field1.text}
                        onChange={handleChange}
                        readOnly={inputValues.field1.editMode}
                        ref={inputRefs.field1}
                    />
                    <InputButtons onEdit={(e) => handleEdit(e, "field1")} onSave={(e) => handleSave(e,"field1")} />      
                    {inputValues.field1.editMode && <DataGoals />}  
                </div>
                <div>
                    <input
                        className='input-styles'
                        type="text"
                        name='field2'
                        placeholder='Put the field to improve'
                        value={inputValues.field2.text}
                        onChange={handleChange}
                        readOnly={inputValues.field2.editMode}
                        ref={inputRefs.field2}
                    />
                    <InputButtons onEdit={(e) => handleEdit(e, "field2")} onSave={(e) => handleSave(e,"field2")} />      
                    {inputValues.field2.editMode && <DataGoals />}  
                </div>
                <div>
                    <input
                        className='input-styles'
                        type="text"
                        name='field3'
                        placeholder='Put the field to improve'
                        value={inputValues.field3.text}
                        onChange={handleChange}
                        readOnly={inputValues.field3.editMode}
                        ref={inputRefs.field3}
                    />
                    <InputButtons onEdit={(e) => handleEdit(e, "field3")} onSave={(e) => handleSave(e,"field3")} />      
                    {inputValues.field3.editMode && <DataGoals />}  
                </div>
            </form>
        </div>
    )
}

export default Fields
