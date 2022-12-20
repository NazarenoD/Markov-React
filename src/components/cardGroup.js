
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardMarkov from "./cardMarkov";
import React from "react";
import { useEffect, useState } from "react";

function CardGroup() {

  const [theme, setTheme] = useState([]);

   useEffect(() => {
      fetch('http://127.0.0.1:8000/exc/main/')
         .then((response) => response.json())
         .then((data) => {
          setTheme(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

    return (
      <Container>
        <Row className="g-3 mt-2">
          {theme.map((item,i)=>{return(<Col xs={8} md={4}><CardMarkov key={i} dict={item}></CardMarkov></Col>)})}
        </Row>

      </Container>
    );
  }
  
  export default CardGroup;