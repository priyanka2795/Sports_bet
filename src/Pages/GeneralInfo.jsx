import React from 'react';
import { Container,Row, Col,Table } from 'react-bootstrap';
const GeneralInfo = () => {
    return(
        <>
            <div className="info_section ">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <p className='para'>Our betting platform offers a huge selection of sports to choose from. Bet on Cricket, Football, Badminton, Tennis, Basketball, Kabaddi and many more.
                                <br></br>12Bet is not only about traditional sports. We also cover e-sports events considering the evolution happening in that.
                            </p>
                            <div className="info_title">General information</div>
                        </Col>
                        <Col lg={12}>
                            <div className="info_table">
                                <Table bordered >
                                    <tbody>
                                        <tr>
                                            <td>Beginning Year</td>
                                            <td>2007</td>
                                        </tr>
                                        <tr>
                                            <td>Licence</td>
                                            <td>Yes</td>
                                        </tr>
                                        <tr>
                                            <td>First Deposit Bonus</td>
                                            <td>200%</td>
                                        </tr>
                                        <tr>
                                            <td>Deposit Funds</td>
                                            <td>UPI , PhonePe, Paytm, IMPS and all major payment supported in India</td>
                                        </tr>
                                        <tr>
                                            <td>Withdraw Funds</td>
                                            <td>Local banks</td>
                                        </tr>
                                        <tr>
                                            <td>Social Media Channels</td>
                                            <td>Facebook, Twitter, Instagram, Linkedin</td>
                                        </tr>
                                        <tr>
                                            <td>Mobile Application</td>
                                            <td>iPhone, Android</td>
                                        </tr>
                                        <tr>
                                            <td>customer Support</td>
                                            <td>Live support, email</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )

}


export default GeneralInfo;