import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';
import Logo from '../../assets/logo/logo.png';

function NavScrollExample() {
  return (
    <Navbar className='navbar'>
      <Container>
          <div className='lg-nav'>
              <img src={Logo} alt="Logo" />
              <ul>
                <li >HH Top Up</li>
              </ul>
          </div>
          <div className='no-bullet'>
            <ul>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>Shop</a></li>
              <li><a href='#'>Contact</a></li>
            </ul>
          </div>
          <div>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className='bt-search' variant="outline-danger">Search</Button>
          </Form>
          </div>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;