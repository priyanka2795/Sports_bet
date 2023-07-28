import React, { useEffect } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap'
// import AOS from "aos";
// import "aos/dist/aos.css";
import bannerGif from '../assets/images/bannerGif.gif'
import img1 from '../assets/images/11.png'
import img2 from '../assets/images/carousel5.jpg'
import img3 from '../assets/images/carousel4.jpg'
import { Slide } from "react-awesome-reveal";
const Hero = () => {

    // useEffect(() => {
    //     AOS.init({
    //         duration: 1000
    //     });
    // })

    function Redirect_web() {
        window.open("http://go.45bol.com/92040409/home/hien/index.html?ref=" + encodeURIComponent(window.location.href), "_blank");
        return false;
    }
    
    return (
        <>
            <div className="hero_section">
                <Container fluid>
                    <Row>
                        <Col lg={12} md={12} className="px-0">
                            <div className="hero_slide">
                            <a onClick={Redirect_web} href='javascript:;' target='_blank'>
                                    <img src={bannerGif} alt='A banner' />
                                  </a>
                            </div>
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col lg={12} className="px-0">
                            <Carousel>
                                <Carousel.Item >
                                <a onClick={Redirect_web} href='javascript:;' target='_blank'>
                                    <img
                                        className="d-block w-100"
                                        src={img1}
                                        alt="First slide"
                                    />
                                
                                  </a>
                                    <Carousel.Caption>
                                        <Container>
                                            <Row>
                                                <Col lg={12}>
                                                <Slide>
                                                        <div className="hero_content">
                                                            <div className="offer">offer</div>
                                                            <div className="hero_title">Let's Make Your <br></br> First Investment <br></br> Now</div>
                                                            <div className="hero_subTitle">TRY WITH BONUS AS GIFT</div>
                                                        </div>
                                                    </Slide>

                                                </Col>
                                            </Row>
                                        </Container>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item >
                                <a onClick={Redirect_web} href='javascript:;' target='_blank'>
                                    <img
                                        className="d-block w-100"
                                        src={img2}
                                        alt="Second slide"
                                    />
                                     </a>
                                    <Carousel.Caption>
                                        <Container>
                                            <Row>
                                                <Col lg={12}>
                                                    <Slide>
                                                        <div className="hero_content">
                                                            <div className="offer">offer</div>
                                                            <div className="hero_title">Let's Make Your <br></br> First Investment <br></br> Now</div>
                                                            <div className="hero_subTitle">TRY WITH BONUS AS GIFT</div>
                                                        </div>
                                                    </Slide>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item >
                                <a onClick={Redirect_web} href='javascript:;' target='_blank'>
                                    <img
                                        className="d-block w-100"
                                        src={img3}
                                        alt="Third slide"
                                        height="100%"
                                    />
                                     </a>
                                    <Carousel.Caption>
                                        <Container>
                                            <Row>
                                                <Col lg={12}>
                                                <Slide>
                                                        <div className="hero_content">
                                                            <div className="offer">offer</div>
                                                            <div className="hero_title">Let's Make Your <br></br> First Investment <br></br> Now</div>
                                                            <div className="hero_subTitle">TRY WITH BONUS AS GIFT</div>
                                                        </div>
                                                    </Slide>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row> */}
                    {/* <Row className='justify-content-center text-center'>
                        <Col lg={8}>
                            <div className="hero_content">
                                <div data-aos="fade-right">
                                    <div className="offer">offer</div>
                                </div>
                                <div data-aos="fade-up">
                                    <div className="hero_title">Let's Make Your <br></br> First Investment Now</div>
                                    <div className="hero_subTitle">TRY WITH BONUS AS GIFT</div>
                                    <div className="hero_login_btn mt-5">
                                        <a href="https://www.12bet.com/" target="_blank" className='login_link'>Login</a>
                                    </div>
                                </div>
                            </div>
                        </Col>

                    </Row> */}
                </Container>
            </div>
        </>
    )
}


export default Hero;