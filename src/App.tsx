import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./logo.svg";
import "./App.css";
import DiffChecker from "./components/DiffChecker";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchXml } from "./service/Api";



function App() {
  const [response, setResponse] = useState('');

  console.log(process.env.NODE_ENV);
  console.log(process.env.REACT_APP_DEV_MODE);

  // const fetchData = async () => {
  //   try {
  //     const apiUrl = 'https://jsonplaceholder.typicode.com/todos'; // Replace with your API endpoint
  //     const response = await axios.get(apiUrl);
  //     setResponse(response.data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };
  
   const fetchData = async () => {
    try {
      const response: any = await fetchXml();
      setResponse(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <>
    <button onClick={fetchData}>Fetch Data</button>
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
      <DiffChecker responseData={response} />
    </>
  );
}

export default App;
