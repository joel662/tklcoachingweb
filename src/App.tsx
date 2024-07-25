
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './components/Header';
import Form from './components/Form'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import image0 from './assets/image0.jpeg';


function App() {
  return (
    
    <div className="App">
      
      <header className="App-header">
      
        <>
          <Header/>
        </>
        
        <Container>
      <Row>
        <Col>
        <>
          <Form/>
          
          <span>
            <Button variant="primary">Log In</Button>{' '}
            <Button variant="success">Create an Account</Button>{' '}
            </span>
        </>
        </Col>
        <Col>
          <Image src={image0} fluid />
        </Col>
      </Row>
      </Container>

    
      </header>
     
    </div>
  );
}

export default App;
