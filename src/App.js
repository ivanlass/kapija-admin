import './App.css';
import UploadURL from './components/UploadURL';
import UploadImage from './components/UploadImage';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <UploadURL />
          </Col>
          <Col>
            <UploadImage label="Banner 1950x200"/>
            <UploadImage label="Banner 700x250 (Mobilna verzija)"/>
            <UploadImage label="Banner 600x600"/>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
