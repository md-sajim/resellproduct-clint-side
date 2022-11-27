import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Navber = () => {
    // const { logOut, user, setUser } = useContext();
    const user = 'sajim'
  const hendleLogOut = () => {
    // logOut().then(result => {
    //   setUser()
    // }).catch(() => { })
  }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" className='sticky-top nav-hight' variant="dark">
      <Container className='p-0'>
        <Navbar.Brand href="#home"><span className='text-warning'>PHOTO</span>GRAFI</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link className="btn btn-secondary m-1 active" to='/'>Home</Link>
            <Link className="btn btn-secondary m-1 active" to='/blog'>Blog</Link>
            <Link className="btn btn-secondary m-1 active" to='/orderrevew'>Revew</Link>
          </Nav>
          <div className='vartical-line d-md-block d-sm-none  m-1'></div>
          <div className='vartical-line d-md-block d-sm-none m-1'></div>
          <Nav>

            <Nav.Link href="#deets">{user?.email}</Nav.Link>
            {user?.uid ?
              <button className="btn btn-secondary  active" onClick={hendleLogOut}>LogOut</button>
              :
              <Link className="btn btn-secondary active" to='/login'>Log In</Link>
            }
           

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Navber;