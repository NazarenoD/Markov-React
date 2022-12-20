import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import Accordion from 'react-bootstrap/Accordion';


import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';


import  { MathJaxContext, MathJax } from 'better-react-mathjax'

function Curse() {
  const params = useParams()
  const [excercise, setCategorie] = useState([]);
   useEffect(() => {
      
      fetch(`http://127.0.0.1:8000/exc/main/${params.Curse}/${params.Theme}`)
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
    <Accordion defaultActiveKey="0">
        {excercise.map((item,i)=>{return(
        <Accordion.Item eventKey={item.id_exercise} key= {item.id_exercise}>
          <Accordion.Header>
          <Container>
          <div className='text-center'>
          <h3>{item.title}</h3>
            {item.description.split("::::").map((str,i)=>{
              if (str.replace(/\s/g,'')[0] === "\\"){
                return(
                  <MathJaxContext key = {`math_${i}`}>
                  <MathJax>{"\\("+str+"\\)"}</MathJax>
                  </MathJaxContext>
                )
              }
              else{
                  return(
                    <p key = {`math_${i}`}>
                      {str}
                    </p>
                  )
                }
            })}
          
          </div>
          </Container>
          </Accordion.Header>
          <Accordion.Body>
          
          {item.solution.split("::::").map((str,r)=>{
              if (str.replace(/\s/g,'')[0] === "\\"){
                return(
                  <MathJaxContext key = {`math_r_${r}`}>
                  <MathJax>{"\\("+str+"\\)"}</MathJax>
                  </MathJaxContext>
                )
              }
              else{
                  return(
                    <p key = {`math_r_${r}`}>
                      {str}
                    </p>
                  )
                }
            })}
          
          </Accordion.Body>
        </Accordion.Item>
        )})}

        
    
        </Accordion>
        </Container>
  );
}

export default Curse;