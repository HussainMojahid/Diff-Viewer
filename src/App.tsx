import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./logo.svg";
import "./App.css";
import DiffChecker from "./components/DiffChecker";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  console.log(process.env.NODE_ENV);
  console.log(process.env.REACT_APP_DEV_MODE);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <DiffChecker />
    </>
  );
}

export default App;
