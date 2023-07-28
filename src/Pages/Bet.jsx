import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import betMatch from '../assets/images/betMatch.png'
function Bet() {
    return (
        <>
            <div className="hr_div">
                <Container>
                    <Row>
                        <Col lg={12} md={12}>
                            <hr />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="bet_section">
                <Container>
                    <Row>
                        <Col lg={12} md={12}>
                            <h3>How to Bet on 12Bet</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={12}>
                            <div className="bet_content">
                                <p>You can begin placing bets on the top sporting events after creating an account and funding it. Even a total novice will be able to grasp it thanks to the helpful website and app on 12Bet! But to make sure you have no problems throughout the game, we have created a brief guide on how to put bets:</p>
                                <ol>
                                    <li>log in to your account on the 12Bet website</li>
                                    <li>through the top main menu, select the Sports tab.</li>
                                    <li>Choose the desired sport and competition/league from the menu on the left.</li>
                                    <li>Choose the match and the result using the odds in the page's centre.</li>
                                    <li>A parlay bet can be created by simultaneously adding multiple outcomes on your betting slip.</li>
                                    <li>You can pick a price for each individual bet or a total bet amount in the bet slip before clicking the Place bet button.</li>

                                </ol>
                                <p>The bet will then be recorded on the website. If the bet turns out to be a winner, you will automatically collect your rewards.</p>
                            </div>
                        </Col>
                        <Col lg={6} md={12}>
                            <div className="bet_img">
                                <img src={betMatch} alt="" className='img-fluid d-block m-auto' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Bet