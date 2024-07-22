import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Button, InputGroup, Form } from 'react-bootstrap';


function Calculator() {
const[input,setinput]=useState("");

const handleClickButton=(value)=>{
  if(value==="AC"){
    setinput("");
  }
  else if(value==="DEL"){
    setinput(input.slice(0,-1))
  }
  else if(value==="="){
    setinput(eval(input).toString());

  }

}

  const buttonStyle = {
    width: '70px', 
    height: '70px', 
    fontSize: '1.5em', 
  };




  return (
    <Container className='d-flex justify-content-center align-items-center vh-100'>
      <Card style={{ width: "22rem" }}>
        <Card.Body>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="0"
              className='py-3'
              value={input}
              readOnly
            />
          </InputGroup>
          <div>
            <table style={{ width: '100%' }}>
              <tbody>
                <tr>
                  <td><Button style={buttonStyle} onClick={()=>handleClickButton("AC")}>AC</Button></td>
                  <td><Button style={buttonStyle} onClick={()=>handleClickButton("DEL")}>DEL</Button></td>
                  <td><Button style={buttonStyle} value="%" onClick={(e)=>{setinput(input + e.target.value)}}>%</Button></td>
                  <td><Button style={buttonStyle} value="/" onClick={(e)=>{setinput(input + e.target.value)}}>/</Button></td>
                </tr>

                <tr>
                  <td><Button style={buttonStyle} value="7" onClick={(e)=>{setinput(input + e.target.value)}}>7</Button></td>
                  <td><Button style={buttonStyle} value="8" onClick={(e)=>{setinput(input + e.target.value)}}>8</Button></td>
                  <td><Button style={buttonStyle} value="9" onClick={(e)=>{setinput(input + e.target.value)}}>9</Button></td>
                  <td><Button style={buttonStyle} value="*" onClick={(e)=>{setinput(input + e.target.value)}}>*</Button></td>
                </tr>

                <tr>
                  <td><Button style={buttonStyle}  value="4" onClick={(e)=>{setinput(input + e.target.value)}}>4</Button></td>
                  <td><Button style={buttonStyle}  value="5" onClick={(e)=>{setinput(input + e.target.value)}}>5</Button></td>
                  <td><Button style={buttonStyle}  value="6" onClick={(e)=>{setinput(input + e.target.value)}}>6</Button></td>
                  <td><Button style={buttonStyle}  value="-" onClick={(e)=>{setinput(input + e.target.value)}}>-</Button></td>
                </tr>

                <tr>
                  <td><Button style={buttonStyle}  value="1" onClick={(e)=>{setinput(input + e.target.value)}}>1</Button></td>
                  <td><Button style={buttonStyle}  value="2" onClick={(e)=>{setinput(input + e.target.value)}}>2</Button></td>
                  <td><Button style={buttonStyle}  value="3" onClick={(e)=>{setinput(input + e.target.value)}}>3</Button></td>
                  <td><Button style={buttonStyle}  value="+" onClick={(e)=>{setinput(input + e.target.value)}}>+</Button></td>
                </tr>

                <tr>
                  <td><Button style={buttonStyle}  value="00" onClick={(e)=>{setinput(input + e.target.value)}}>00</Button></td>
                  <td><Button style={buttonStyle}  value="0" onClick={(e)=>{setinput(input + e.target.value)}}>0</Button></td>
                  <td><Button style={buttonStyle}  value="." onClick={(e)=>{setinput(input + e.target.value)}}>.</Button></td>
                  <td><Button style={buttonStyle} className='bg-danger border-0'onClick={()=>{handleClickButton("=")}}>=</Button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Calculator;
