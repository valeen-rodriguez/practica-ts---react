import React from 'react';
import Notes from './Notes';
import { Note } from '../models/note.model';
import 'bootstrap/dist/css/bootstrap.min.css';

interface NotesListProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const NotesList: React.FC<NotesListProps> = ({ notes, setNotes }) => {
    const handleDelete = (id: string) => {
        setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
    }

    const renderNotes = (): JSX.Element[] => {
        return notes.map(note => (
            <Notes key={note.id} notes={note} onDeleteNote={handleDelete} />
        ));
    }

    return (
        <>
            <h2 className="mt-3">Notas</h2>
            <div>{renderNotes()}</div>
        </>
    );
};

export default NotesList;
