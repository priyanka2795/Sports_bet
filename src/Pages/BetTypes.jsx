import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {AiOutlineCheck, AiOutlineClose} from 'react-icons/ai'
import swap from '../assets/images/swap.png'
import bettype from '../assets/images/bettype.webp'
function BetTypes() {
    return (
        <>
            <div className="betType_section">
                <Container>
                    <Row>
                        <Col lg={12} md={12}>
                            <h3>12Bet’s Bet Types</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{span:6, order:'first'}} md={12} xs={{ order:'last'}}>
                            <div className="betType_img">
                                <img src={bettype} alt="" className="img-fluid" />
                            </div>
                        </Col>
                        <Col lg={{span:6, order:'last'}} md={12} xs={{ order:'first'}}>
                            <div className="betType_content">
                                <p>Numerous sports are available at 12Bet, along with unique bets on things like sports awards and politics. Major matches in the top leagues, like the Premier League, have more than 100 markets, and games in less well-known leagues, like the Icelandic League, frequently have more than 20 markets. However, there may be just one "Win/Draw/Loss" market for some games, such as the Indonesian League.</p>
                                <p>You have a variety of alternatives when placing a bet.</p>
                                <ul>
                                <li>Oridnary bets on one specific result of a game</li>
                                <li>Express bets that include many results. The chances of each event are increased, but to earn money while betting with an expert, all wagers must be successful.</li>
                                <li>Systems are a different kind of multiple outcome bet, although in this case you can still win even if not all of the events come true.</li>

                            </ul>
                            <p>For each kind of sport, there are certain kinds of wagers. Find the greatest odds by exploring the 12Bet platform!</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="hr_div">
                <Container>
                    <Row>
                        <Col lg={12} md={12}>
                            <hr />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="exchange_section">
                <Container>
                    <Row>
                        <Col lg={12}>
                        <h3>Exchange Option</h3>
                        </Col>
                    </Row>
                    <Row className='mt-15'>
                        <Col lg={6} md={12}>
                            <div className="exchange_content">
                                <p>You can bet against a certain option on the betting market of the betting firm 12Bet. For instance, if a player thinks a tennis player won't win the match, he might wager on the athlete losing.</p>
                                <p>The opportunities for sports betting have been greatly increased by the emergence of the exchange site. You can now place bets with other users of the internet platform rather than the betting site. However, bear in mind that these agreements contain both advantages and disadvantages:</p>
                                <Row>
                                    <Col lg={6}>
                                        <div className="exchange_advantages">
                                        <ul>
                                            <li><AiOutlineCheck className='right' /> There are no limits on the maximum coupon payouts;</li>
                                            <li><AiOutlineCheck className='right' /> High and fair odds;</li>
                                            <li><AiOutlineCheck className='right' /> No commission from the betting site;</li>
                                            <li><AiOutlineCheck className='right' /> The option of adding an infinite number of choices for the same match.</li>
                                        </ul>
                                        </div>

                                    </Col>
                                    <Col lg={6}>
                                        <div className="exchange_disadvantages">
                                        <ul>
                                            <li><AiOutlineClose className='close' /> Commission payments for each victory;</li>
                                            <li><AiOutlineClose className='close' /> Low secondary event liquidity;</li>
                                            <li><AiOutlineClose className='close' /> Delays in the line's formation.</li>
                                            
                                        </ul>
                                        </div>

                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg={6} md={12}>
                            <div className="exchange_img">
                                <img src={swap} alt="" className="img-fluid" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default BetTypes