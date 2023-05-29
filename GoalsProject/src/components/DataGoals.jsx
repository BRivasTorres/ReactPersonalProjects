import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const DataGoals = () => {
  const [text, setText] = useState('');

  const handleTextChange = (value) => {
    setText(value);
  };

  const handleImageInsertion = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const imageSrc = event.target.result;
      const imageMarkdown = `<img src="${imageSrc}" alt="Image" />`;

      setText((prevText) => prevText + '\n' + imageMarkdown);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className='bg-[#9b9ece] w-[40%]'>
      <ReactQuill value={text} onChange={handleTextChange} modules={{ toolbar: false }} formats={["image"]} className='bg-[#6665dd] text-[#acadbc] font-semibold' />
      <input type="file" accept="image/*" onChange={handleImageInsertion} className='w-[100%]' />
    </div>
  );
};

export default DataGoals;
