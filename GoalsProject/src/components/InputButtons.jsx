const InputButtons = ({onEdit, onSave}) => {
  return (
    <div>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onSave}>Save</button>
    </div>
  )
}

export default InputButtons
