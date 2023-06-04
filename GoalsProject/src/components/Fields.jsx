import InputButtons from "./InputButtons"
import useFields from "../hooks/useFiles";
import DataGoals from "./DataGoals";

const Fields = () => {
    const { inputValues, handleChange, handleSave, handleEdit, inputRef } = useFields();    
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
                        readOnly={!inputValues.field1.editMode}
                        // autoFocus={inputValues.field1.editMode}
                        ref={inputRef}
                    />
                    <InputButtons onEdit={(e) => handleEdit(e, "field1")} onSave={(e) => handleSave(e,"field1")} />      
                    {inputValues.field1.editMode && <DataGoals />}  
                </div>
                {/* <div>
                    <input
                        className='input-styles'
                        type="text"
                        name='field2'
                        placeholder='Put the field to improve'
                        value={inputValues.field2.text}
                        onChange={handleChange}
                        readOnly={!inputValues.field2.editMode}
                        // autoFocus={inputValues.editMode}
                        ref={inputRef}
                    />
                    <InputButtons onEdit={(e) => handleEdit(e, "field2")} onSave={(e) => handleSave(e, "field2")} />      
                    {inputValues.field2.editMode  && <DataGoals />}  
                </div> */}
                {/* <div>
                    <input
                        className='input-styles'
                        type="text"
                        name='field3'
                        placeholder='Put the field to improve'
                        value={inputValues.field3}
                        onChange={handleChange}
                        readOnly={!inputValues.editMode}
                        autoFocus={inputValues.editMode}
                        ref={inputRef}
                    />
                    <InputButtons onEdit={handleEdit} onSave={handleSave} />      
                    {!inputValues.editMode && <DataGoals />}  
                </div> */}
            </form>
        </div>
    )
}

export default Fields
