import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import shape from '../assets/images/shape.png'
function Introduction() {
  return (
    <>
        <div className="intro_section">
            <Container>
                <Row>

                    <Col lg={6} md={12}>
                        <div className="intro_content">
                            <h3>Introduction</h3>
                            <p>Since its launch, 12Bet has established itself as a top betting site, particularly in India, where the business has gained a lot of player favour. </p>
                            <p>You can bet on a variety of sports here, including cricket, soccer, chess, hockey, tennis, table tennis, golf, car racing, kabbadi, horse racing, and more. There is gambling entertainment here for everyone! </p>
                            <p>Numerous users are drawn to the website's dark aesthetic and simple interface. According to player reviews, the website loads quickly enough. The website is additionally mobile-friendly! Indian players may get all the information they need on the main page of the 12Bet betting site. </p>
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <div className="intro_img">
                            <img src={shape} alt=""  className='img-fluid d-block m-auto' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default Introduction
