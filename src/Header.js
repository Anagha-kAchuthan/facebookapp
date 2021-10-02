import React from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap'
import './Header.css';

function Header() {
    return (
        <>
        <div className="headerdiv">
          
                <Navbar bg="dark" variant="dark" >
        <Container>
        <Navbar.Brand href="#home"><img src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png" alt="" class="register_logo" />
            </Navbar.Brand>
        {/* <Nav className="me-auto">
          <Nav.Link href="#home">HOME</Nav.Link>
          <Nav.Link href="#features">ABOUT</Nav.Link>
          <Nav.Link href="#pricing">CONTACTUS</Nav.Link>
        </Nav> */}
        </Container>
        
        
      </Navbar>
     
        </div>
  
</>
        
    )
}

export default Header
