import Container from 'react-bootstrap/esm/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


import Nav from 'react-bootstrap/Nav';


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
    <Table className='mt-2' striped bordered hover variant="dark">
      <tbody>
        {
          categorie.map((item)=>{
            return (
              <tr key={item.id_categorie}>
                
                <td>{item.title} - {item.description}</td>
                <td style={{width: 150}}><div className='d-grid gap-2'><Button variant="outline-light" size="lg"><Nav.Link href={`/exercises/${params.Curse}/${item.title}`}>Ejercicios</Nav.Link></Button></div></td>
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