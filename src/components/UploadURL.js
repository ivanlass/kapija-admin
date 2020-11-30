import React, { useState } from 'react';
import '../App.css';
import Form from './Form';
import axios from 'axios';

function UploadURL(props) {
  const [value, setValue] = useState('')

  console.log(value)

  const sendData = (e) => {
    e.preventDefault()
    console.log("pioslan")
    axios.post('http://localhost:5000/live/add', {
      url: value,
    })
      .then(function (response) {
        console.log(response);
        props.setLiveURL(response.data)
        props.setIsVisible(true)
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  return (
    <div className="App">
      <Form setValue={setValue} value={value} sendData={sendData} placeholder="Live URL" label="URL za Live video" />
    </div>
  );
}

export default UploadURL;
