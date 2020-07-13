import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './components/CardList/CardList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Col, Row } from 'reactstrap';
import './App.css'; 

const App = () => {
  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className={'offset-md-3'}>
          <CardList />
        </Col>
      </Row>
    </Container>
  )
}

export default App;
