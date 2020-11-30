import React, { useState, useEffect } from 'react'
import './App.css';
import UploadURL from './components/UploadURL';
import UploadImage from './components/UploadImage';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios';
import LiveURLlist from './components/LiveURLlist'
import BannersList from './BannersList';
import Notification from './components/Notification';

function App() {
  const [liveURL, setLiveURL] = useState("")
  const [banners, setBanners] = useState("")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:5000/banners/')
      .then(function (response) {
        setBanners(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios.get('http://localhost:5000/live/')
      .then(function (response) {
        setLiveURL(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

  }, [])


  console.log(banners)


  return (
    <div className="App">
      {isVisible && <Notification setIsVisible={setIsVisible} />}
      <Container fluid>
        <Row>
          <Col>
            <UploadURL setLiveURL={setLiveURL} setIsVisible={setIsVisible} />
            {liveURL[0] && <LiveURLlist liveURL={liveURL} setLiveURL={setLiveURL} setIsVisible={setIsVisible} />}
          </Col>
          <Col>
            <UploadImage label="Banner 1950x200" placement="top" setBanners={setBanners} setIsVisible={setIsVisible} />
            <UploadImage label="Banner 700x250 (Mobilna verzija)" placement="mobile" setBanners={setBanners} setIsVisible={setIsVisible} />
            <UploadImage label="Banner 600x600" placement="side" setBanners={setBanners} setIsVisible={setIsVisible} />
          </Col>
        </Row>
        <Row className="banner-row">
          <Col>
            <h2 className="title-big">Top banneri 1950x200</h2>
            {banners[0] && <BannersList banners={banners} setBanners={setBanners} setIsVisible={setIsVisible} placement="top" w={380} />}
          </Col>
          <Col>
            <h2 className="title-big">Banner 700x250 (Mobilna verzija)</h2>
            {banners[0] && <BannersList banners={banners} setBanners={setBanners} setIsVisible={setIsVisible} placement="mobile" w={200} />}
          </Col>
          <Col>
            <h2 className="title-big">Banner 600x600</h2>
            {banners[0] && <BannersList banners={banners} setBanners={setBanners} setIsVisible={setIsVisible} placement="side" w={120} />}
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
