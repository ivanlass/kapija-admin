import React, { useState } from 'react';
import '../App.css';
import Form from './Form';
import axios from 'axios';

function UploadImage(props) {
  const [value, setValue] = useState('')
  const [link, setLink] = useState('')

  const sendData = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('banner', value);
    formData.append('placement', props.placement)
    formData.append('link', link)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };

    axios.post('http://localhost:5000/banners/add', formData, config)
      .then(function (response) {
        console.log(response);
        props.setBanners(response.data)
        setValue("")
        props.setIsVisible(true)
        setLink("")
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  return (
    <div className="grey">
      <Form
        setValue={setValue}
        value={value}
        sendData={sendData}
        label={props.label}
        type="file"
        link={link}
        setLink={setLink}
      />

    </div>
  );
}

export default UploadImage;
