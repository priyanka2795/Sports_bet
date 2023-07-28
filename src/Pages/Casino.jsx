import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import withdraw from '../assets/images/img.png'
import bet from '../assets/images/bet1.png'
import loyalty from '../assets/images/loyalty.png'
function Casino() {
    return (
        <>
            <div className="casino_section">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h3>12Bet’s Casino Games</h3>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col lg={6}>
                            <div className="casino_img">
                                <img src={bet} alt="" className="" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="casino_content">
                                <p>When you sign up for a 12Bet account, you may place wagers on sports as well as participate in a range of casino games. There are hundreds of slot machines in the catalogue, including:</p>
                                <p>Slot machines, arcade games, video poker, lotteries, TV shows, peer-to-peer gaming, and a live casino.</p>
                                <p>Only legally permitted games with a high betting return of at least 98 percent are offered in this casino. </p>
                                <p>Numerous games, including roulette, baccarat, blackjack, poker, keno, bingo, scratch cards, traditional slot machines, 3D slots with jackpots, and Megaways, can be found in the Casino section. To make it easier for you, they are divided into several themes: Sports, pets, adventure, science fiction, horror, myths, and ancient history are a few examples.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="withdrawal_section">
                <Container>
                   
                    <Row>
                        <Col lg={6}>
                            <div className="withrawal_content">
                            <h3>12Bet Withdrawals and Deposits</h3>
                                <p>You must verify your account in order to access the financial transactions, and to do so, you must send a photo of the identification and address proof documents.</p>
                                <p>There are only a few payment options supported by the 12Bet website, but they are all secure and accessible.</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="widthrawal_img">
                                <img src={withdraw} alt="" className="img-fluid"  />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="loyalty_section">
                <Container>
                    
                    <Row>
                    <Col lg={{ span: 6, order: "first" }} xs={{ order:"last"}}>
                            <div className="loyalty_img">
                                <img src={loyalty} alt="" className="img-fluid" />
                            </div>
                        </Col>
                        <Col lg={{ span: 6, order: "last" }} xs={{ order: "first" }}>
                            <div className="loyalty_content">
                            <h3>Loyalty Program for 12Bet </h3>
                                <p>The 12Bet Loyalty Program is an original loyalty programme that rewards active play. You must accumulate Rewards Points, which are earned for your deposits and wagers on any game at 12Bet, in order to advance to a higher level. In the internal Rewards store, they may be traded for expensive items like electronics, free bets, and free spins.</p>
                            </div>
                        </Col>
                       
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Casino


