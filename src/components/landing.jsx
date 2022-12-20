import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/esm/Card';
import Button from 'react-bootstrap/Button';



import stat_1 from '../img/stat1.jpg'
import stat_2 from '../img/stat2.jpg'
import stat_3 from '../img/stat3.jpg'

function Landing() {
  return (
  <Container>
    <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 opacity-100"
          src={stat_1}
          alt="First slide"
        />
        <Carousel.Caption>
        <Card className='c-text'>
        <Card.Body>
          <Card.Title>Adéntrate en la estadística</Card.Title>
          <Card.Subtitle className="mb-2">Guías de ejercicios pensados para ti.</Card.Subtitle>
          <Button variant="outline-light">Ejercicios</Button>
        </Card.Body>
        </Card>
        </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 opacity-100"
          src={stat_2}
          alt="Second slide"
        />
        <Carousel.Caption>
        <Card className='c-text'>
        <Card.Body>
          <Card.Title>Ten curiosidad</Card.Title>
          <Card.Subtitle className="mb-2">Artículos que facilitaran tu forma de ver la matemática.</Card.Subtitle>
          <Button variant="outline-light">Light</Button>
      
        </Card.Body>
        </Card>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 opacity-100"
          src={stat_3}
          alt="Third slide"
        />
        <Carousel.Caption>
        <Card className='c-text'>
        <Card.Body>
          <Card.Title>Sugiere nuevos problemas</Card.Title>
          <Card.Subtitle className="mb-2">Contáctanos con un problema y lo subiremos para tí.</Card.Subtitle>
          <Button variant="outline-light">Contáctanos</Button>
      
        </Card.Body>
        </Card>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
  );
}

export default Landing;