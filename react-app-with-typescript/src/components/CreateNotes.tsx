import React, { useState, useRef } from 'react';
import { Note } from '../models/note.model';
import { Alert, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface CreateNotesProps {
    notes: Note[];
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const CreateNotes: React.FC<CreateNotesProps> = ({ notes, setNotes }) => {
    const [errorMessage, setErrorMessage] = useState<string>("");
    const titleInputRef = useRef<HTMLInputElement>(null);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const colorInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (!titleInputRef.current?.value || !textAreaRef.current?.value) {
            setErrorMessage("Todos los campos son necesarios");
            return;
        }
        
        setErrorMessage("");
        setNotes(prevNotes => [
            ...prevNotes,
            {
                id: (new Date()).toString(),
                title: titleInputRef.current?.value || "",
                text: textAreaRef.current?.value || "",
                color: colorInputRef.current?.value || "#dfdfdf",
                date: (new Date()).toString()
            }
        ]);
        
        titleInputRef.current.value = "";
        textAreaRef.current.value = "";
    }

    return (
        <>
            <h2>Crear Notas</h2>
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            <Form className="mt-3 mb-3" onSubmit={handleSubmit}>

                {/* TITULO */}
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese un titulo a su nota" ref={titleInputRef} />
                </Form.Group>
                {/* TEXTO */}
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Texto</Form.Label>
                    <Form.Control placeholder="Ingrese sus notas" as="textarea" rows={3} ref={textAreaRef} />
                </Form.Group>
                {/* COLOR */}
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="colorInput">Color de Notas</Form.Label>
                    <Form.Control type="color" id="colorInput" defaultValue="#dfdfdf" title="Elige tu color" ref={colorInputRef} />
                </Form.Group>
                <Button type="submit" variant="primary">Guardar</Button>{' '}
            </Form>
        </>
    );
};

export default CreateNotes;