import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSquareFull, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import './Navber.css'

const Navber = () => {
    const { logOut, user, setUser } = useContext(AuthContext);
    const hendleLogOut = () => {
        logOut().then(result => {
          setUser()
        }).catch(() => { })
    }
    return (
        <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"rgba(218, 165, 32, 0.071)"}} className='static-top nav-hight px-0 mx-0' variant="dark">
            <Container className='px-4'>
                <Navbar.Brand href="#home">
                    <span style={{color:"#FCA129"}} className='ps-2 h3'>Re</span><span className='text-dark h3'>SellBD</span><span style={{fontSize:"5px", color:"#FCA129"}}><FaSquareFull/></span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className="btnhover ms-1" to='/'>Home</Link>
                        <Link className="btnhover ms-1" to='/explor'>Explore</Link>
                        <Link  className="btnhover ms-1" to='/blog'>Blog</Link>
                        <Link className="btnhover ms-1" to='/dashbore'>Deshbord</Link>
                        {user?.uid ?
                            <Link className="btnhover ms-1" onClick={hendleLogOut}>LogOut</Link>
                            :
                            <Link className="btnhover ms-1" to='/login'>Log In</Link>
                        }
                        <Link href="#deets"><FaUserCircle className='text-dark h3 m-0'/></Link>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navber;