import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import sports from '../assets/images/sports.png'
import sportsOdd from '../assets/images/sportsOdd.png'
function Sports() {
  return (
    <>
        <div className="sports_type_section">
            <Container>
                <Row>
                    <Col lg={12}>
                        <h3>Sports Type to Bet</h3>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{span:6, order:'first'}} md={12} xs={{ order:'last'}}>
                        <div className="sports_type_img">
                            <img src={sports} alt="" className="img-fluid" />
                        </div>
                    </Col>
                    <Col lg={{span:6, order:'last'}} md={12} xs={{ order:'first'}}>
                        <div className="sports_type_content">
                            <p>Users are drawn to bookmaker 12Bet by its competitive odds and wide range of sports betting options.</p>
                            <p>It includes competitions from more than 20 sports, including:</p>
                            <p>Sports like handball, basketball, hockey, golf, volleyball, racing, badminton, boxing, chess, horse racing, kabaddi, table tennis, and futsal are also popular.</p>
                            <p>On the official 12Bet website, select your preferred sport and place a winning wager to win big!</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="sports_betting_section">
            <Container>
               
                <Row>
                <Col lg={6}>
                        <div className="sports_betting_content">
                        <h3>12Bet’s Sports Betting Odds</h3>
                            <p>The odds offered by 12Bet are generally pretty good. This business occasionally provides the greatest odds in the market for teams that are both favourites and underdogs. One of the platform's biggest advantages is that it provides some of the finest cricket and soccer odds in India.</p>
                            <p>If you visit a certain match on the website, you can learn more about the chances.</p>
                            
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="sports_betting_img">
                            <img src={sportsOdd} alt=""  className='img-fluid' />
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    </>
  )
}

export default Sports