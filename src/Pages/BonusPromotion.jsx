import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import bonus from '../assets/images/bonus1.png'
function BonusPromotion() {
    return (
        <>

            <div className="bonus_section">
                <Container>

                    <Row>
                        <Col lg={{ span: 6, order: 'first' }} md={12} xs={{ order: 'last' }}>
                            <div className="bonus_img">
                                <img src={bonus} alt="" className='img-fluid' />

                            </div>
                        </Col>
                        <Col lg={{ span: 6, order: 'last' }} md={12} xs={{ order: 'first' }}>
                            <div className="bonus_content">
                                <h3>Bonuses and Promotions</h3>
                                {/* <p>After signing up, players can obtain bonuses through individual bonus programmes:</p> */}
                                <ul >

                                    <li>200% Welcome bonus</li>
                                    <li>Up to INR 11,900 Weekly deposit bonus</li>
                                    <li>Refer a friend a bonus</li>
                                    <li>2% Exchange rebate</li>
                                </ul>
                               
                                {/* <p>Some promotions are exclusive to new players. Additionally, there are other bonuses available for loyal players, like the bonus for repeated deposits, cashback ranging from 0.5% to 20% of your wagering volume, and more.</p> */}
                                <div className="play_btn">
                                    <a href="http://go.45bol.com/92040409/home/hien/index.html?ref" target="_blank">Place a bet</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default BonusPromotion