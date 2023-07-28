import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import img from '../assets/images/thumb2.png'
import AOS from "aos";
import "aos/dist/aos.css";

const PlayBet = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    })

    return (
        <>
            <div className="playBet_section">
                <Container>
                    <Row>
                    <Col lg={{span:6, order:'first'}} md={12} xs={{ order:'last'}}>
                            <div data-aos="zoom-in">
                                <div className="img_div">
                                    <img src={img}  alt="" className='img-fluid d-block m-auto' />
                                </div>
                            </div>
                          
                        </Col>
                        <Col lg={{span:6, order:'last'}} md={12} xs={{ order:'first'}}>

                            <div className="content">
                                <p><span>Join our platform and receive a bonus for your first deposit.</span><br></br>
                                    <strong>Join our platform and receive a bonus for your first deposit.</strong><br></br>
                                    The best betting experience is right at your fingertips with XYZ. For the best payouts, participate in sporting events, casino games, and even lotteries. We give you access to a betting platform with options like "LAY" and "BACK."
                                    <br></br> We also provide a very secure betting environment and the greatest methods for funding the accounts for our esteemed players.
                                    <br></br> Win big using your gaming abilities and playing against the actual players in live casino at the comfort of your home.<br></br>
                                    We guarantee that everyone will enjoy themselves.

                                </p>

                                <div className="play_btn">
                                    <a href= "http://go.45bol.com/92040409/home/hien/index.html?ref" target="_blank">Place a bet</a>
                                </div>
                            </div>

                        </Col>
                        

                    </Row>
                </Container>


            </div>
        </>
    )
}



export default PlayBet;