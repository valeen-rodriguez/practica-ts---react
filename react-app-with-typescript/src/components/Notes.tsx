import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Note } from '../models/note.model';
import 'bootstrap/dist/css/bootstrap.min.css';

interface NoteItemProps {
    notes: Note,
    onDeleteNote: (id: string) => void
}

const Notes: React.FC<NoteItemProps> = ({ notes, onDeleteNote }) => {
    return (
        <div className="mb-3">
            <Card style={{ backgroundColor: notes.color }}>
                <Card.Body>
                    <Card.Title>{notes.title}</Card.Title>
                    <Card.Text>{notes.text}</Card.Text>
                    <Card.Subtitle className="text-muted">{notes.date}</Card.Subtitle>
                    <Button className="mt-3" variant="danger" onClick={() => onDeleteNote(notes.id)}>Delete</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Notes;