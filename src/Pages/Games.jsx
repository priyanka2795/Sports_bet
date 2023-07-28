import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import casinoImg from '../assets/images/casino_game.png'
import lottary from '../assets/images/lottary.jpg'
import arcade from '../assets/images/arcade.jpg'
import keno from '../assets/images/keno.jpg'
function Games() {
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
            <div className="available_games_section">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h3>Games Available on 12Bet</h3>
                        </Col>
                    </Row>
                    <Row className='mt-15'>
                        <Col lg={6}>
                            <div className="available_games_content">
                                <p>You can launch a variety of gambling games at 12Bet and utilize a variety of features. The following game genres are some of the company's primary business segments:</p>
                                <ul>
                                    <li>Sports</li>
                                    <li>Esports</li>
                                    <li>Playtech</li>
                                    <li>Casino</li>
                                    <li>Live Casino</li>
                                    <li>Arcade</li>
                                    <li>P2P</li>
                                    <li>Number Game</li>
                                    <li>Keno</li>
                                    <li>Lottery</li>

                                </ul>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="available_game_img">
                                <img src={casinoImg} alt="" className="img-fluid" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="favorite_games_section">
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={8}>
                            <h3>Favourite Games</h3>
                            <p>The bookmaker company 12Bet offers a great variety of gambling entertainment in addition to betting. The website features a number of areas containing games in many genres, including slots, lottery games, arcade games, and number games.</p>
                        </Col>
                    </Row>
                   <div className="p_50">
                   <Row>
                        <Col lg={6}>
                            <div className="lottery_img">
                                <img src={lottary} alt="" className="img-fluid" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="lottery_content">
                                <h4>Lottery</h4>
                                <p>Fans of quick drawings will be pleasantly surprised by the Lottery section. Users have access to 12Bet’s in-house developed lottery games, traditional lotteries, bingo, and interesting video games.</p>
                            </div>
                        </Col>
                    </Row>
                   </div>
                  <div className="p_50">
                  <Row>
                       
                       <Col lg={{span:6, order:"first"}} xs={{order:"last"}}>
                           <div className="arcade_content">
                               <h4>Arcade Games</h4>
                               <p>Dynamic games with a brief plot and unique betting opportunities are arcade games. In some, you must predict how many darts you will hit, how many pins you will knock down in a game of bowling, and how far the plane will fly. Numerous games are available at 12Bet, however the following are particularly well-liked by frequent gamblers:</p>
                               <p>Rock, Paper, Scissors, Rooster Fight, Octopus Game, Incan Adventure, Thor, The Ladder, and The Incredible Balloon Machine are a few other classic games.</p>
                           </div>
                       </Col>
                       <Col lg={{span:6, order:"last"}} xs={{order:"first"}}>
                        <div className="arcade_img">
                            <img src={arcade} alt="" className="img-fluid" />
                        </div>
                       </Col>
                   </Row>
                  </div>
                   <div className="p_50">
                   <Row>
                        <Col lg={6}>
                            <div className="keno_img">
                                <img src={keno} alt="" className="img-fluid" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="keno_content">
                                <h4>Keno</h4>
                                <p>The popularity of a game featuring aspects of bingo, roulette, poker, and lotteries among Indian users is partly attributable to the prize draw's straightforward rules and conditions. To play keno, you'll need:</p>
                                <ol>
                                    <li>Purchase a lottery ticket;</li>
                                    <li>mark between 10 and 20 numbers on it; </li>
                                    <li>choose the stake amount.</li>
                                </ol>
                                <p>Keep an eye on the slot machine as it chooses 20 numbered balls. After that, compare the chosen numbers to those displayed on the screen. The amount won depends on how many games are played; the more games, the greater the sum.</p>
                            </div>
                        </Col>
                    </Row>
                   </div>
                </Container>
            </div>
        </>
    )
}

export default Games