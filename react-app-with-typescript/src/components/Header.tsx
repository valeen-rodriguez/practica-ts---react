import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <Navbar fixed="top" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <span>App de Notas | Práctica de TypeScript</span>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default Header;