import React, { useState } from 'react';
import '../App.css';
import Form from './Form';
import axios from 'axios';

function UploadImage(props) {
    const [value, setValue] =useState('')

console.log(value)

const sendData = e => {
    e.preventDefault()
    const formData = new FormData();        
    formData.append('file', value); // appending file

    axios.post('http://localhost:5000/banners/add', {
      formData, placement:"top"
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

}

  return (
    <div className="App">
      <Form 
      setValue={setValue} 
      value={value} 
      sendData={sendData} 
      label={props.label}  
      type="file"/>
    </div>
  );
}

export default UploadImage;
