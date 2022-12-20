
import {Link} from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import stat_1 from '../img/stat1.jpg';


function CardMarkov(props) {
  return (
    <Card bg = "dark">
      <Card.Body>
        <Card.Title><h3>{props.dict.title}</h3></Card.Title>
        <Card.Text>
          
        {props.dict.description}
          
        </Card.Text>
        <div className='text-center'>
          <Link to={props.dict.title}>
            <Button variant="outline-light">Temas</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardMarkov;