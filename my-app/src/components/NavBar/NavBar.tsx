import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (

    <>
      <Navbar fixed='top'>
        <Container fluid>
          <Navbar.Brand href="#home" className='navbar-brand'>Cakee</Navbar.Brand>
          <Nav className="me-auto">

          <NavLink
            className= {({ isActive }) => (isActive ? "nav-link active" : "nav-link")} 
            to="/">
            Home
          </NavLink>

          <NavLink
           className= {({ isActive }) => (isActive ? "nav-link active" : "nav-link")} 
           to="/cakes">
            Cakes
          </NavLink>

          <NavLink
           className= {({ isActive }) => (isActive ? "nav-link active" : "nav-link")} 
           to="/order">
            Order
          </NavLink>

          <NavLink
           className= {({ isActive }) => (isActive ? "nav-link active" : "nav-link")} 
           to="/contact">
            Contact
          </NavLink>
          </Nav>

        <form className="d-flex" style={{marginRight:'1rem'}}>
            <input className="form-control me-2" type="search" placeholder="Rasperry cake" aria-label="Search"/>
            <button className="btn btn-outline-white d-flex justify-content-around" style={{width: '160px', height: 'fit-content'}} type="submit">
                <i className="bi bi-search mr-2"></i>
                Search</button>
        </form>

        <button className="btn btn-primary d-flex justify-content-around" style={{width: '100px', height: 'fit-content'}}>
            <i className="bi bi-bag mr-2"></i>
            Cart
        </button>
        </Container>
      </Navbar>
    </>
   
  );
}

