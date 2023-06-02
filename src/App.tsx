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
  const [response, setResponse]  = useState<string>('');
  const [response1, setResponse1]  = useState<string>('');


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
      const res: any = await fetchXml();
      setResponse(res);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchData2 = async () => {
    try {
      const res: any = await fetchXml();
      setResponse1( res);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
    <Navbar bg="dark"  variant="dark">
        <Container>
          <Navbar.Brand href="#home">DiffViewer</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    <button onClick={fetchData}>Fetch Data</button>
    <button onClick={fetchData2}>Fetch Data</button>
      
      <DiffChecker props={response} props1={response1} />
    </>
  );
}

export default App;
