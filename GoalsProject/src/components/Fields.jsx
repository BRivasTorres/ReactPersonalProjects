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
                        value={inputValues.field1}
                        onChange={handleChange}
                        readOnly={!inputValues.editMode}
                        autoFocus={inputValues.editMode}
                        ref={inputRef}
                    />
                    <InputButtons onEdit={handleEdit} onSave={handleSave} />      
                    {onSave && <DataGoals />}              
                </div>
                <input
                    className='input-styles'
                    type="text"
                    name='field2'
                    placeholder='Put the field to improve'
                    value={inputValues.field2}
                    onChange={handleChange}
                />
                <input
                    className='input-styles'
                    type="text"
                    name='field3'
                    placeholder='Put the field to improve'
                    value={inputValues.field3}
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default Fields
