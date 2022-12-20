import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/esm/Card';


import stat_1 from '../img/stat1.jpg';


import React from "react";
import { useEffect, useState } from "react";

function Articles() {
  const [articles, setArticles] = useState([]);

   useEffect(() => {
      fetch('http://127.0.0.1:8000/art/main/')
         .then((response) => response.json())
         .then((data) => {
          setArticles(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

    return (
      <Container>
        <Row xs={1} md={2} className="g-4">
        {articles.map((item,i) => (
        <Col key = {i}>
          <Card bg="dark">
            <Card.Body>
              <Card.Title className="text-light">{item.title}</Card.Title>
              <Card.Text>
                {item.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        ))}
        </Row>

      </Container>
    );
  }
  
  export default Articles;

