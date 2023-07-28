import React from 'react';
import { BiChevronDown } from 'react-icons/bi'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <>
            {/* <div className="header_section">

                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/"><span className='span1'>12</span>BET</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/about_us">ABOUT US</Link>
                                </li>
                                <li className="nav-item " id='sport_dropdown'>
                                    <a className="nav-link " href="#">SPORT BETTING <span><BiChevronDown /></span></a>
                                    <div className="dropdown_menu">
                                        <ul>
                                            <li><a href="/">Cricket</a></li>
                                            <li><a href="/">ipl</a></li>
                                            <li><a href="/">tennis</a></li>
                                            <li><a href="/">football</a></li>
                                            <li><a href="/">esports</a></li>
                                            <li><a href="/">table tannis</a></li>
                                            <li><a href="/">basketball</a></li>
                                            <li><a href="/">boxing</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact_us" className="nav-link">CONTACT US</Link>
                                </li>
                                <li className="nav-item nav-btn">
                                    <div className="login_btn ">
                                        <a href="http://go.45bol.com/92040409/home/hien/index.html?ref" target="_blank" className='login_link'>Login</a>
                                    </div>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>
            </div> */}
            <div className="header_section">
                <Navbar expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#home">  <Link className="navbar-brand" to="/"><span className='span1'>12</span>BET</Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <div className="login_btn ">
                                    <a href="http://go.45bol.com/92040409/home/hien/index.html?ref" target="_blank" className='login_link'>Login</a>
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}



export default Header;