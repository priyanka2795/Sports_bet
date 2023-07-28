import React from 'react';
import { Container, Row, Col, Accordion, Nav, Tab } from 'react-bootstrap';

const Faq = () => {
    return (
        <>
            <div className="faq_section py-5" id='faq'> 
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="faq_content">
                                <div className="faq_para">
                                    12Bet is a trustworthy betting site that top bookmakers recommend.
                                    12Bet is a trustworthy website where you can place bets on any competition, game, or team performance for all thrill-seekers and sports enthusiasts. The company's continually updated data enables you to follow all prominent sports. You may watch live cricket updates as well as bet price updates over here.

                                    The website that truly looks out for its consumers is 12Bet. It appeals to users with a simple layout and user-friendly interface.

                                    You should not worry about security when using 12Bet. Online betting is permitted, despite Indian legislation forbidding the use of casinos and sportsbooks there. You can play and place a bet without any hassle.




                                </div>
                                <div className="faq_title">Frequently Asked Questions</div>


                                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                    <Row>
                                        <Col sm={3}>
                                            <Nav variant="pills" className="flex-column">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="first">General</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="second">My Account</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="third">Deposit</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="fourth">Withdrawal</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="fifth">Forget your ID or password?</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="sixth">Price Format</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </Col>
                                        <Col sm={9}>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="first">
                                                    <Accordion>
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header><div className='left_border'></div><span>What are the currencies I can open my account in?</span></Accordion.Header>
                                                            <Accordion.Body>
                                                                <p>You can open your account in:</p>
                                                                <ol>
                                                                    <li>US Dollars (USD)</li>
                                                                    <li>Euros (EUR)</li>
                                                                    <li>Great Britain Pounds (GBP)</li>
                                                                    <li>Renminbi (RMB)</li>
                                                                    <li>Malaysian Ringgit (MYR)</li>
                                                                    <li>Thailand Baht (THB)</li>
                                                                    <li>Indonesia Rupiah (IDR)</li>
                                                                    <li>Vietnam Dong (VND)</li>
                                                                    <li>Indian Rupee (INR)</li>
                                                                </ol>
                                                            </Accordion.Body>
                                                        </Accordion.Item>

                                                        <Accordion.Item eventKey="1">
                                                            <Accordion.Header><div className='left_border'></div><span>How do I open an account?</span></Accordion.Header>
                                                            <Accordion.Body>
                                                                <p>Opening your account with  is simple and will only take a few minutes of your time.</p>
                                                                <strong>STEP 1</strong>
                                                                <p>On the home page, click on the <span className='text-info'>"Sign up"</span> button in the top right-hand corner of the page. This will take you to the registration page.</p>
                                                                <strong>STEP 2</strong>
                                                                <p>You will also be asked to read and accept the  Terms & Conditions and Rules & Regulations, confirm that you are at least 21 years of age and enter the required personal and contact information.</p>
                                                                <strong>STEP 3</strong>
                                                                <p>Once your registration is completed, you may immediately login, deposit and then start to place bets.</p>
                                                            </Accordion.Body>
                                                        </Accordion.Item>

                                                        <Accordion.Item eventKey="2">
                                                            <Accordion.Header><div className='left_border'></div><span>Is my personal information secure?</span></Accordion.Header>
                                                            <Accordion.Body>
                                                                <p> will not disclose your personal information to any third party unless required to do so per our privacy policy.</p>
                                                            </Accordion.Body>
                                                        </Accordion.Item>

                                                        <Accordion.Item eventKey="3">
                                                            <Accordion.Header><div className='left_border'></div><span>Are there any charges whenever I deposit or withdraw funds from my account?</span></Accordion.Header>
                                                            <Accordion.Body>
                                                                <p>As our valued customer we will always strive to keep banking free of charge for you. You will not be charged by us for any deposits into or withdrawals out of your  account - unless we specifically alert you in advance that the particular method you have requested carries an excess charge.</p>
                                                            </Accordion.Body>
                                                        </Accordion.Item>

                                                        <Accordion.Item eventKey="4">
                                                            <Accordion.Header><div className='left_border'></div><span>Which sports can I bet on ?</span></Accordion.Header>
                                                            <Accordion.Body>
                                                                <p>You can bet on a wide selection of sport, among the popular choices are Soccer, American Football, Basketball, Baseball and Tennis. We strive to offer the best service for members and this include constant addition of new sports.</p>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="5">
                                                            <Accordion.Header><div className='left_border'></div><span>I have a display issue for Bet Slip and Log In Box, how to resolve?</span></Accordion.Header>
                                                            <Accordion.Body>
                                                                <p>Some customers may experience a display issue where the "Bet Slip" and "Log In Boxes" appear off the edge of your screen. This is most likely to be due to the screen resolution of your PC being set too low (below 1024 by 768). For optimal use of the website, please ensure your screen resolution is set to 1024 x 768 or higher.</p>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="6">
                                                            <Accordion.Header><div className='left_border'></div><span>I cannot see some part of the website graphic, what can I do?</span></Accordion.Header>
                                                            <Accordion.Body>
                                                                <p>There is a known issue with older versions of Adobe Flash Player while displaying Flash graphic. We advise using Adobe Flash version 9 or later.</p>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="7">
                                                            <Accordion.Header><div className='left_border'></div><span>What is the maximum bet amount of?</span></Accordion.Header>
                                                            <Accordion.Body>
                                                                <p>Each sports and betting products have their own maximum stake and these amount may increase or decrease depending on the bet's pool size and the time the bet was placed. It is advisable to refer to the MAX stake on the mini bet list shown on the left hand frame by clicking on the price whenever you want to place a bet.</p>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="8">
                                                            <Accordion.Header><div className='left_border'></div><span>What is the minimum bet amount of ?</span></Accordion.Header>
                                                            <Accordion.Body>
                                                                <p>The minimum bet amount is one unit of the currency you opened your account in.</p>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="9">
                                                            <Accordion.Header><div className='left_border'></div><span>How long does it take for bets to be settled?</span></Accordion.Header>
                                                            <Accordion.Body>
                                                                <p>We aim to settle bets as quickly as possible, however for some events official confirmation of the result is necessary which may delay the settlement procedures.</p>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="second">
                                                    <Accordion>
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header><div className='left_border'></div><span>How do I change my username or password?</span></Accordion.Header>
                                                            <Accordion.Body>
                                                                <p>You cannot change your username. You may change your password in your profile page after login.</p>
                                                                <strong>STEP 1</strong>
                                                                <p>Please click on the "Manage Account" button on the top of page.</p>
                                                                <strong>STEP 2</strong>
                                                                <p>Please click on the "Change Password" button to and key in your new password in the respective fields..</p>
                                                            </Accordion.Body>
                                                        </Accordion.Item>

                                                        <Accordion.Item eventKey="1">
                                                            <Accordion.Header><div className='left_border'></div><span>What happens if I have forgotten my username or password?</span></Accordion.Header>
                                                            <Accordion.Body>
                                                                <p>Should you forget your username, you will need to contact our Customer Service email ( support.in@12csd.com ) so we may carry out an advance security check with you on the details of your account.

                                                                    <br></br>  <br></br>Should you forget your password, you can simply click on the Forgot Password button to reset your password. You would need to key in your Email Address, Security Question and Security Answer, and upon verification, your password will be sent to your email address.</p>
                                                            </Accordion.Body>
                                                        </Accordion.Item>

                                                        <Accordion.Item eventKey="2">
                                                            <Accordion.Header><div className='left_border'></div><span>How do I edit my personal information?</span></Accordion.Header>
                                                            <Accordion.Body>
                                                                <p>You can edit your personal information in the "Manage Account" page after login.</p>
                                                            </Accordion.Body>
                                                        </Accordion.Item>

                                                        <Accordion.Item eventKey="3">
                                                            <Accordion.Header><div className='left_border'></div><span>There is an error when I try to log in using my password?</span></Accordion.Header>
                                                            <Accordion.Body>
                                                                <p>Please kindly check if you have entered the password correctly. The password should have at least 6 alphanumeric characters, and it is case sensitive</p>
                                                            </Accordion.Body>
                                                        </Accordion.Item>


                                                    </Accordion>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="third">
                                                    <Accordion>
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header><div className='left_border'></div><span>How do I deposit funds into my account?</span></Accordion.Header>
                                                            <Accordion.Body>
                                                                You can deposit funds into your account via:
                                                                <ol>
                                                                    <li>Skrill</li>
                                                                    <li>NETELLER</li>
                                                                    <li>Local Bank-In</li>
                                                                </ol>
                                                            </Accordion.Body>
                                                        </Accordion.Item>

                                                        <Accordion.Item eventKey="1">
                                                            <Accordion.Header><div className='left_border'></div><span>How do I deposit via Skrill?</span></Accordion.Header>
                                                            <Accordion.Body>
                                                                <strong>STEP 1</strong>
                                                                <p>You can use Skrill to transfer funds to your  account if you are holding USD, EUR or GBP account.</p>
                                                                <strong>STEP 2</strong>
                                                                <p>If you do not have a Skrill account, please follow these steps to register:</p>
                                                                <ol>
                                                                    <li>Visit www.skrill.com .</li>
                                                                    <li>Click "sign up now".</li>
                                                                    <li>Follow the account registration steps as instructed.</li>
                                                                    <li>Account registration is instant, you can make a deposit after opening an account successfully.</li>
                                                                </ol>
                                                            </Accordion.Body>
                                                        </Accordion.Item>

                                                        <Accordion.Item eventKey="2">
                                                            <Accordion.Header><div className='left_border'></div><span>How do I deposit via NETELLER?</span></Accordion.Header>
                                                            <Accordion.Body>
                                                                <strong>STEP 1</strong>
                                                                <p>You can use NETELLER to transfer funds to your  account if you are holding INR, USD, EUR or GBP account.</p>
                                                                <strong>STEP 2</strong>
                                                                <p>If you do not have a NETELLER account, please follow these steps to register:</p>
                                                                <ol>
                                                                    <li>Visit www.neteller.com.</li>
                                                                    <li>Click "Join now".</li>
                                                                    <li>Follow the account registration steps as instructed.</li>
                                                                    <li>Account registration is instant, you can make a deposit after opening an account successfully.</li>
                                                                </ol>
                                                                <strong>STEP 3</strong>
                                                                <p>Select NETELLER from the Deposit button, input the amount you wish to transfer to your  account, your 12-digit NETELLER account number and your assigned secure ID. The amount transferred will immediately be credited to your  account.</p>
                                                            </Accordion.Body>
                                                        </Accordion.Item>

                                                        <Accordion.Item eventKey="3">
                                                            <Accordion.Header><div className='left_border'></div><span>How do I deposit via Local Bank-In?</span></Accordion.Header>
                                                            <Accordion.Body>
                                                                <p>Local Bank-In is available to  members with RMB / VND / IDR / THB / MYR / KRW / INR account.</p>
                                                                <strong>STEP 1</strong>
                                                                <p>Register on  with your preferred currency as INR and contact live chat or support@gmail.com and provide your username to get our latest banking details and instructions.</p>
                                                                <strong>STEP 2</strong>
                                                                <p>Kindly visit your bank and make a deposit to the bank account obtained from Live Chat.
                                                                    *Cash on counter and IMPS transfers are instant.
                                                                    *Online transfer (NEFT/RTGS)- within 1to 3 hours
                                                                    *Interbank transfer- within 5 to 24 hours.
                                                                </p>
                                                                <p>We highly recommend you to use cash on counter or Online transfer for instant deposit.</p>
                                                                <p>Note: Please DO NOT indicate  as reference no./ remarks in your online bank acct when transferring funds to us and be reminded NOT to use 3rd party account.</p>
                                                                <strong>STEP 3</strong>
                                                                <p>Login to your account and click on banking and the fill out the form under Deposit tab with requested details. Also upload the deposit slip or send us the screenshot of online transaction.</p>
                                                                <p>NEFT Banking hours are between (Monday - Friday) 8:00am – 6:30pm, Saturday 8:00am –12:30pm. The rest of banking hour’s transaction will be credited for the next working day (Except Sunday).</p>
                                                                <p>* For any assistance you may contact our live chat or request a call back from our Hindi Speaking Representative</p>
                                                            </Accordion.Body>
                                                        </Accordion.Item>

                                                        <Accordion.Item eventKey="4">
                                                            <Accordion.Header><div className='left_border'></div><span>Maximum / minimum deposit amount, applicable fees & processing time?</span></Accordion.Header>
                                                            <Accordion.Body>
                                                                Can’t find your banking method and currency? Click here for other options.
                                                                <p>Notes:<br></br>
                                                                    The minimum amount is based on per transaction.<br></br>
                                                                    Pre-notification is required for any amount above the maximum stated and acceptance is subjected to the sole discretion of the Company. You may contact us at support.in@12csd.com for more details.<br></br>
                                                                    We will process all deposit within 24 hours. The processing time may be subjected to further processing and clearing times of respective third party payment solution providers.</p>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="fourth">
                                                    <Accordion>
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header><div className='left_border'></div><span>How do I withdraw funds from my  account?</span></Accordion.Header>
                                                            <Accordion.Body>
                                                                <p>At  we adhere to a strict professional conduct in processing payment transactions with our customers. In order to protect our customers from fraudulent situations, we will need to obtain necessary information required in accordance with our Withdrawal Policy.</p>
                                                            </Accordion.Body>
                                                        </Accordion.Item>

                                                        <Accordion.Item eventKey="1">
                                                            <Accordion.Header><div className='left_border'></div><span>What is  Withdrawal Policy?</span></Accordion.Header>
                                                            <Accordion.Body>
                                                                <ol>
                                                                    <li>You can only withdraw in the currency that you are currently registered in your betting account.</li>
                                                                    <li>All withdrawal can only be made in the name and details as registered.</li>
                                                                    <li>You are required to bet at least 100% of the deposit amount before you can request a withdrawal. All rejected, voided, draw and tie bets shall be excluded in the calculation of turnover requirements. If this betting condition is not met, there will be a 20% administrative fee imposed for withdrawal.</li>
                                                                    <li>We reserve the right to request for further information pertaining to member's account such as:</li>
                                                                    <li>We reserve the right to modify the mode or method of payment for your withdrawal (fund-out) request at our sole and absolute discretion and to deduct part or all of the fund transfer charges incurred as a result thereof. The Company shall inform the Customer of its decision by e-mail. The Company?s decision is final and binding.</li>
                                                                </ol>
                                                            </Accordion.Body>
                                                        </Accordion.Item>

                                                        <Accordion.Item eventKey="2">
                                                            <Accordion.Header><div className='left_border'></div><span>How do I withdraw via local bank transfer?</span></Accordion.Header>
                                                            <Accordion.Body>
                                                            Withdrawal via local bank transfer is available to  members with RMB / VND / IDR / THB / MYR / KRW / INR account.<br></br>
                                                            <strong>STEP 1</strong>
                                                            <p>Click on 'Banking' and click on 'Withdrawal' tab.</p>
                                                            <strong>STEP 2</strong>
                                                            <p>Fill in the withdrawal form with the valid bank details and click on 'Request Payout' button once done.</p>
                                                            * We will review your request and once everything is in order, the withdrawal will be processed by our Finance Department.
                                                            </Accordion.Body>
                                                        </Accordion.Item>

                                                        <Accordion.Item eventKey="3">
                                                            <Accordion.Header><div className='left_border'></div><span>How do I withdraw via Skrill?</span></Accordion.Header>
                                                            <Accordion.Body>
                                                            <strong>STEP 1</strong>
                                                            <p>If you have deposited funds to your  account via Skrill you will also be able to withdraw funds via Skrill. You will not be charged for withdrawals via Skrill. Withdrawals via Skrill are available to  customers with USD, EUR or GBP account.</p>
                                                           
                                                            <strong>STEP 2</strong>
                                                            <p>Select Skrill under the Withdrawal button. Input the amount you intend to withdraw and your Skrill Email, then click the "Request Payout" button.</p>
                                                            * We will review your request and once everything is in order, the withdrawal will be processed by our Finance Department. Your request will be credited to your Skrill account within 24 hours and an e-mail will be sent to you informing you of your successful withdrawal.
                                                             </Accordion.Body>
                                                        </Accordion.Item>

                                                        <Accordion.Item eventKey="4">
                                                            <Accordion.Header><div className='left_border'></div><span>How do I withdraw via NETELLER?</span></Accordion.Header>
                                                            <Accordion.Body>
                                                            <strong>STEP 1</strong>
                                                            <p>If you have deposited funds to your account via NETELLER you will also be able to withdraw funds via NETELLER. You will not be charged for withdrawals via NETELLER. Withdrawals via NETELLER are available to  customers with INR, USD, EUR or GBP account.</p>
                                                           
                                                            <strong>STEP 2</strong>
                                                            <p>Select NETELLER under the Withdrawal button. Input the amount you intend to withdraw and your NETELLER account ID, then click the "Request Payout" button.</p>
                                                            * We will review your request and once everything is in order, the withdrawal will be processed by our Finance Department. Your request will be credited to your NETELLER account within 24 hours and an e-mail will be sent to you informing you of your successful withdrawal.
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="fifth">
                                                    <Accordion>
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header><div className='left_border'></div><span>Forget your ID or password?</span></Accordion.Header>
                                                            <Accordion.Body>
                                                               <strong>STEP 1</strong>
                                                               <p>If you have forgotten your password, please click on "Forget your ID or password?" at the top of pages.</p>
                                                               <strong>STEP 2</strong>
                                                               <p>Please provide your email and Security question and answer and we will send your new password to the email address you provided to us at registration.</p>
                                                            </Accordion.Body>
                                                        </Accordion.Item>

                                                      
                                                    </Accordion>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="sixth">
                                                    <Accordion>
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header><div className='left_border'></div><span>What is Malay odds?</span></Accordion.Header>
                                                            <Accordion.Body>
                                                                Malay odd is closely related between your stake and potential profit.
                                                                a. Profit less than stake ??Your odds are positive and indicate the profit per unit you bet.
                                                            </Accordion.Body>
                                                        </Accordion.Item>

                                                        <Accordion.Item eventKey="1">
                                                            <Accordion.Header><div className='left_border'></div><span>What is Decimal odds?</span></Accordion.Header>
                                                            <Accordion.Body>
                                                                The odds show how many units the bookmaker pays back per unit staked.
                                                            </Accordion.Body>
                                                        </Accordion.Item>

                                                        <Accordion.Item eventKey="2">
                                                            <Accordion.Header><div className='left_border'></div><span>What is China odds ?</span></Accordion.Header>
                                                            <Accordion.Body>
                                                                China odds multiplied with your stake equals the winnings. The odds show how many units you win in pure winning per unit staked.
                                                            </Accordion.Body>
                                                        </Accordion.Item>

                                                        <Accordion.Item eventKey="3">
                                                            <Accordion.Header><div className='left_border'></div><span>What is Indonesia Odds?</span></Accordion.Header>
                                                            <Accordion.Body>
                                                                When the odd is negative, they show how big a stake is needed for a profit of 1 and when it is positive, they show the profit from a stake of 1.
                                                                <br></br>a. Positive odds
                                                                <br></br>b. Negative odds
                                                            </Accordion.Body>
                                                        </Accordion.Item>

                                                        <Accordion.Item eventKey="4">
                                                            <Accordion.Header><div className='left_border'></div><span>What are US Odds (Moneyline)?</span></Accordion.Header>
                                                            <Accordion.Body>
                                                                Betting on the moneyline is equivalent to picking a team to win the game.  It makes it instantly clear, who the favourite is and who is the underdog, and the spread is very transparent.<br></br>
                                                                If the odds quoted are positive (+), this is the amount you win if you bet $100 and your bet is a winner.   If the odds quoted are negative(-), this represents the amount you have to bet in order to win $100.
                                                                a. Positive odds
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Col>
                                    </Row>
                                </Tab.Container>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}



export default Faq;