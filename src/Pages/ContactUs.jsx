import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { FaPhoneAlt } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { MdLocationPin } from 'react-icons/md'
const ContactUs = () => {
    return (
        <>
            <div className="contact_section py-5">
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={10}>
                            <div className="contact_content">
                                <div className="title">Get in <span>Touch</span></div>
                                <div className="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quisquam reprehenderit, blanditiis nam debitis
                                    libero facilis illum repudiandae eveniet voluptatibus quibusdam illo ea nisi ipsa accusantium nobis animi asperiores quaerat ,Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit. Fugiat quisquam reprehenderit, blanditiis nam debitis libero facilis illum repudiandae eveniet
                                    voluptatibus quibusdam illo ea nisi ipsa accusantium nobis animi asperiores quaerat .
                                </div>
                                <div className="wrapper">
                                    <div className="phone">
                                        <div className="icon"><FaPhoneAlt /></div>
                                        <div className="phone_content">+91 9999 888 777</div>
                                    </div>
                                    <div className="email">
                                        <div className="icon"><HiOutlineMail /></div>
                                        <div className="email_content">info@gmail.com</div>
                                    </div>
                                    <div className="location">
                                        <div className="icon"><MdLocationPin /></div>
                                        <div className="location_content">Atulya IT park, Indore</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                
            </div>
            <div className="contact_form_section">
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={10}>
                            <div className="contact_form_fields">
                                <div className="head">Contact <span>us</span></div>
                                <div className="para">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quisquam reprehenderit, blanditiis nam debitis
                                    libero facilis illum repudiandae eveniet voluptatibus quibusdam illo ea nisi ipsa accusantium nobis animi asperiores quaerat ,Lorem ipsum
                                </div>
                                <div className="form_fields">
                                    <Row>
                                        <Col lg={6} md={6}>
                                            <input type="text" placeholder='Name' className='form-control' />
                                        </Col>
                                        <Col lg={6} md={6}>
                                            <input type="email" placeholder='Email' className='form-control' />
                                        </Col>
                                        <Col lg={6} md={6}>
                                            <input type="text" placeholder='Subject' className='form-control' />
                                        </Col>
                                        <Col lg={6} md={6}>
                                            <input type="number" placeholder='Phone' className='form-control' />
                                        </Col>
                                        <Col lg={12} md={12}>
                                            <textarea rows={5} placeholder='Message' className='form-control' />
                                        </Col>
                                        <Col lg={12} md={12}>
                                            <div className="contact_btn">
                                                <button className='send_btn'>SEND</button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    
                </Container>
            </div>
        </>
    )
}


export default ContactUs;