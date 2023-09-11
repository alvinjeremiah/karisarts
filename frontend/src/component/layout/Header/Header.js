import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../../../images/logo2bg.png'
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {

  const handleMouseEnter = (e) => {
    e.target.parentElement.querySelector('.NavDropdown').classList.add('show');
  };

  const handleMouseLeave = (e) => {
    e.target.parentElement.querySelector('.NavDropdown').classList.remove('show');
  };

  return (
    <Navbar  bg="light" expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <Navbar.Brand href="/">
        <img
          src={logo} 
          alt="Logo"
          width="150"
          height="100"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto my-2 my-lg-0">
          <Nav.Link href="/all-artworks">All Artworks
          
          </Nav.Link>
          {/* <Nav.Link href="/paintings">Paintings</Nav.Link> */}
          <NavDropdown
              id="nav-dropdown-dark-example"
              title="Painting"
              menuVariant="light"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <NavDropdown.Item href="#action/3.1">landscape</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Realistic
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Potrait</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Others
              </NavDropdown.Item>
            
              
            </NavDropdown>
          <Nav.Link href="/drawings">Drawings</Nav.Link>
          <Nav.Link href="/artists">Artists</Nav.Link>
          <Nav.Link href="/sell-paintings">Sell Paintings</Nav.Link>
        </Nav>
        
        <Form inline className="d-flex">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Nav.Link href="/frontend/src/component/User/LoginSignUp.js">
          <PersonIcon fontSize='large'/>
        </Nav.Link>
        <Nav.Link>
          <FavoriteIcon fontSize='large'/>
        </Nav.Link>
        <Nav.Link>
          <ShoppingCartIcon fontSize='large'/>
        </Nav.Link>
      </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Header