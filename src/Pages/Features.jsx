import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import img from '../assets/images/cup.png'
import AOS from "aos";

const Features = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    })
    return(
        <>
        <div className="feature_section">
            <Container>
                <Row>
                    <Col lg={12} md={12}>
                        <div className="title">Be in control</div>
                    </Col>
                </Row>
                <Row className='justify-content-center feature_content'>
                    <Col lg={4}>
                    <div data-aos="zoom-in-down">
                        <div className="feature_items">
                            <div className="feature_img">
                                <img src="https://template.labartisan.net/demos/jackpoo/jackpoo/assets/images/game/01.png" alt="item1" className='img-fluid d-block mx-auto' />
                            </div>
                            <div className="feature_head">ADVICE AND GUIDE</div>
                            <div className="feature_para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque accusamus ullam quo corporis sunt </div>
                        </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                    <div data-aos="zoom-in-down">
                        <div className="feature_items">
                            <div className="feature_img">
                                <img src="https://template.labartisan.net/demos/jackpoo/jackpoo/assets/images/game/02.png" alt="item1" className='img-fluid d-block mx-auto' />
                            </div>
                            <div className="feature_head">ADVICE AND GUIDE</div>
                            <div className="feature_para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque accusamus ullam quo corporis sunt </div>
                        </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                    <div data-aos="zoom-in-down">
                        <div className="feature_items">
                            <div className="feature_img">
                                <img src="https://template.labartisan.net/demos/jackpoo/jackpoo/assets/images/game/03.png" alt="item1" className='img-fluid d-block mx-auto' />
                            </div>
                            <div className="feature_head">ADVICE AND GUIDE</div>
                            <div className="feature_para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque accusamus ullam quo corporis sunt </div>
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}


export default Features;