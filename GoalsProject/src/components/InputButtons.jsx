const InputButtons = ({onEdit, onSave}) => {
  return (
    <div className="mx-[1rem] inline-block">
      <button onClick={onEdit} className="bg-white">Edit</button>
      <button onClick={onSave}>Save</button>
    </div>
  )
}

export default InputButtons
