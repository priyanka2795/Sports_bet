import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MdOutlineWatchLater, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { FaFacebookF, FaTwitter, FaTelegramPlane, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="footer">
                <Container fluid>
                    <Row>
                        <Col lg={5} md={4}>
                            <div className="footer_logo">
                                <div className="logo">
                                    <span className='span1'>12</span>BET
                                </div>
                                <p className=' mt-3'>We encourage responsible gaming as a part of our social responsibility.
                                    We make an effort to make sure that you have a positive betting experience while still being fully aware of the negative social and financial effects of betting. Betting should be viewed as entertainment rather than a way to make money.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} md={4}>
                            <div className="useful_links">
                                <ul>
                                    <h4>Useful Link</h4>
                                    {/* <li><MdOutlineKeyboardArrowRight /><Link to="/about_us">About Us</Link></li>
                                    <li><MdOutlineKeyboardArrowRight /><Link to="/contact_us">Contact Us</Link></li> */}
                                    <li><MdOutlineKeyboardArrowRight /><a href="#faq">FAQs</a></li>

                                </ul>
                            </div>
                        </Col>
                        <Col lg={3} md={4}>
                            <div className="opening_hours">
                                <ul>
                                    <h4>Opening Hours</h4>
                                    <li><MdOutlineWatchLater /> <span>10 AM - 9 PM, Monday-Saturday</span></li>
                                    <li><MdOutlineWatchLater /> <span>10 AM - 3 PM, Sunday</span></li>
                                </ul>
                            </div>
                            <div className="social_links">
                                <ul>
                                    <li><a href="https://www.facebook.com/12BetLogin-103971599114171" target="_blank"><FaFacebookF /></a></li>
                                    <li><a href="https://twitter.com/12betlogin" target="_blank"><FaTwitter /></a></li>
                                    <li><a href="https://t.me/online12bet" target="_blank"><FaTelegramPlane /></a></li>
                                    <li><a href="https://www.instagram.com/12betlogin/" target="_blank"><FaInstagram /></a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="bottom_footer">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <p>Copyright@2022.All right reserved</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}


export default Footer;