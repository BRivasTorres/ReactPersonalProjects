const InputButtons = ({onEdit, onSave}) => {
  return (
    <div className="inline-block">
      <button onClick={onEdit} className="bg-buttons hover:opacity-80 active:opacity-80">Edit</button>
      <button onClick={onSave} className="bg-buttons hover:opacity-80 active:opacity-80">Save</button>
    </div>
  )
}

export default InputButtons
