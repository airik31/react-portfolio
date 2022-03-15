import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Erik Lidén - Portfolio</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">About Me</Nav.Link>
      <Nav.Link href="#features">Placeholder 1</Nav.Link>
      <Nav.Link href="#pricing">Placeholder 2</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}

export default Header