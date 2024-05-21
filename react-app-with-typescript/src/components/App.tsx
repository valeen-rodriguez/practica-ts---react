import React, { useState } from 'react';
import Header from './Header';
import NotesList from './NotesList';
import CreateNotes from './CreateNotes';
import { Note } from '../models/note.model';
import '../assets/css/App.css';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date()).toString(),
    title: "HelloWorld",
    text: "Prueba",
    color: "#dfdfdf",
    date: (new Date()).toString()
  }]);


  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={ setNotes}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={ setNotes}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}


export default App;