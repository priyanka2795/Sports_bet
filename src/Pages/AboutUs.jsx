import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import {BiCheckShield} from 'react-icons/bi'
import {BsDice6, BsTrophy} from 'react-icons/bs'
import {BiCoinStack} from 'react-icons/bi'
const AboutUs = () => {
    return (
        <>
            <div className="about_section">
                <Container>
                    <Row>
                        <div className="title">About <span>Us</span></div>
                        {/* <div className="para">lorem epsum dollar sit amet</div> */}
                    </Row>
                </Container>
            </div>
           <div className="about_banner">
           <div className="about_content">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="img1">
                                <img src="https://t3.ftcdn.net/jpg/01/97/33/46/360_F_197334647_aClfAIrrc0RPrsC8V52RN4MkzNmQCysc.jpg" alt="img1" className='img-fluid' />
                            </div>
                            <div className="img2">
                                <img src="https://media.istockphoto.com/photos/cricket-action-picture-id502037149?k=20&m=502037149&s=612x612&w=0&h=0LWIpL5rIMtZm2YIxsuTiW1pg6-15qQ0tshNUyxOd6s=" alt="img2" className='img-fluid' />
                                <img src="https://media.istockphoto.com/photos/closeup-of-red-cricket-ball-and-bat-sitting-on-grass-picture-id177427917?k=20&m=177427917&s=612x612&w=0&h=kr-FOxME8KOnnhYsuR6WFAfB-Hv_ch20Fz5xnzeSU10=" alt="img3" className='img-fluid' />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="about_box">
                                <div className="head">About Us Betting Website</div>
                                <h3>Betting Platform</h3>
                                <div className="para">
                                Our exclusive betting platform provides efficient and committed customer service, a secure payment mechanism, and privacy protection. Our welcome bonus program, reward guidelines, and daily incentives have encouraged users to use our platform and stay on it. We are constantly growing our existing exceptional range of games to satisfy even the most demanding players.
                                </div>
                                <div className="para">
                                You can become the hero of your own story with our support. Players from all around the world have developed a refined taste for excellent products and services. We strive to live up to and surpass the expectations of our cherished and valuable players. We are gradually evolving into the one-stop destination for all your betting needs with our in-depth examination of the world of online betting.
                                </div>
                                <div className="about_btn">
                                    <a href='http://go.45bol.com/92040409/home/hien/index.html?ref' target="_blank" className='play_btn'>Play now</a>
                                </div>
                            </div>
                        </Col>
                       
                    </Row>

                </Container>
            </div>
            <hr />
            <div className="why_choose_section">
                <Container>
                <Row>
                    <Col lg={5}>
                       <div className="left">
                       <div className="head">Why play our <br></br> games</div>
                        <div className="para">On our user-friendly website, we have gone out of our way to showcase the future of betting. A complete beginner will have no problem getting started because our platform balances minimalism with innovation and attractiveness.
</div>
                        <div className="para"> Our website is mobile-friendly, which attracts younger players. Enjoy your favourite games accessible right from your hand. 
Look at the benefits of becoming an XYZ member.</div>
                       </div>
                    </Col>
                    <Col lg={7}>
                        <div className="right">
                            <Row>
                                <Col lg={6}>
                                    <div className="box1">
                                        <div className="icon"><BiCheckShield style={{fontSize:"1.8rem"}}/></div>
                                        <div className="head">Safe and Secure Access</div>
                                        <div className="para">We keep all your information private and never share it with or sell it to any parties. You will benefit from safe connections and player protection while playing games that were reviewed by a third-party party to assure fairness.</div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="box1">
                                        <div className="icon"><BsDice6/></div>
                                        <div className="head">Multiple payment options</div>
                                        <div className="para">We provide a wide range of payment methods and currencies in which you can do actual transactions. When you make your first deposit with us at XYZ, you will be rewarded with a generous match bonus!</div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                <div className="box1">
                                        <div className="icon"><BsTrophy/></div>
                                        <div className="head">Exclusive Events</div>
                                        <div className="para">Join us at our special events. You will receive a reward whether you participate or support your favourite.</div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                <div className="box1">
                                        <div className="icon"><BiCoinStack/></div>
                                        <div className="head">Withdrawal Support</div>
                                        <div className="para">If you face any problem while withdrawing your money, our professionals will help you. </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                </Container>
            </div>
           </div>
        </>
    )
}



export default AboutUs;