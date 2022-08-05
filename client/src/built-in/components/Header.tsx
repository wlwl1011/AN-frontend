
import { Navbar, Nav, Container } from 'react-bootstrap'


const Header = () => {
 

  return (
    <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
      <Container>
        <Navbar.Brand href='/'>이웃사이</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          { (
            <Nav className='ms-auto'>
              <Nav.Link href='/Announce'>Announce</Nav.Link>
              <Nav.Link href='/Announce'>Announce</Nav.Link>
              <Nav.Link href='/Announce'>Announce</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header