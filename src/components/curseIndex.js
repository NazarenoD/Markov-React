import Container from 'react-bootstrap/esm/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';


import check from "../img/check.png"
import stat_1 from '../img/stat1.jpg';

import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function CurseIndex() {
  const params = useParams()
  const [categorie, setCategorie] = useState([]);
   useEffect(() => {
      
      fetch(`http://127.0.0.1:8000/exc/main/${params.Curse}/`)
         .then((response) => response.json())
         .then((data) => {
          setCategorie(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);




  return (
    <Container>
      <Row className="g-3 mt-2">
        <Col xs={2} md={4}></Col>
        <Col xs={8} md={4}>
        <Card>
          <Card.Img variant="top" src={stat_1} />
          <Card.Body>
            <Card.Title><h3>{params.Curse}</h3></Card.Title>
            <Card.Text>
             
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
           
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col xs={2} md={4}></Col>
        </Row>
    <Table className='mt-2' striped bordered hover variant="dark">
      <tbody>
        {
          categorie.map((item)=>{
            return (
              <tr key={item.id_categorie}>
                <td style={{width: 70}}><Image style={{width: 50}} src={check}></Image></td>
                <td>{item.title} - {item.description}</td>
                <td style={{width: 150}}><div className='d-grid gap-2'><Button variant="success" size="lg"><Nav.Link href={`/exercises/${params.Curse}/${item.title}`}>Success</Nav.Link></Button></div></td>
              </tr>

            )
          })
        }
      </tbody>
    </Table>
    </Container>
  );
}

export default CurseIndex;