import React, { useState } from 'react';
import '../App.css';
import Form from './Form';
import axios from 'axios';

function UploadURL() {
    const [value, setValue] =useState('')

console.log(value)

const sendData = e => {
    e.preventDefault()
    console.log("pioslan")
    axios.post('http://localhost:5000/banners/add', {
      photo:value, placement:"URL"
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
      <Form setValue={setValue} value={value} sendData={sendData} placeholder="Live URL" label="URL za Live video"/>
    </div>
  );
}

export default UploadURL;
