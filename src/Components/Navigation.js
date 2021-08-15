
import React, { useState } from 'react'
import { Navbar,Container,Nav,Form,Button } from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'
import { Modal } from 'react-bootstrap';
import {Link} from 'react-router-dom';
const Navigation = ({setSearchCondition,selectRating,setSelectRating,setMovies,movies}) => {
    const [show,setShow]=useState(false);
  
    return (
      
        <Navbar bg="dark" variant="dark" style ={{marginBottom: "2rem"}}>
    <Container>
    <Navbar.Brand href="#home">Movie App</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link ><Link to="/home">Home</Link></Nav.Link>
      <Nav.Link ><Link to ="/home">Movies</Link></Nav.Link>
      <Nav.Link ><Link to="/add">Add Movies</Link></Nav.Link>
    </Nav>
    <Rating onClick={(x) => setSelectRating(x)} 
    ratingValue={selectRating}/>
    <Form.Control type="text" placeholder="Search" 
    style ={{ width: "250px" , marginLeft: "1rem"}}
    onChange={(e) => setSearchCondition(e.target.value)}
    ></Form.Control>
    </Container>
    
  </Navbar>
    )
}
export default Navigation
