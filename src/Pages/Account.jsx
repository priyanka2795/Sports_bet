import React from 'react'
import { Col, Container , Row} from 'react-bootstrap'
import account from '../assets/images/ppo.png'
function Account() {
  return (
    <>
    <div className="account_section">
        <Container>
            <Row>
                <Col lg={6} md={12}>
                    <div className="account_content">
                        <h3>Creating an account with 12Bet</h3>
                        <p>As soon as you register with 12Bet, you may begin playing on your preferred games. Reminder: If you've never registered before, then only you can create an account! If not, you'll just need to log into an existing account.</p>
                        <p>The <a href="javascript:;">registration</a> process is pretty easy:</p>
                        <ol>
                            <li>Initially, click Join Now on the homepage of the official 12Bet website.</li>
                            <li>You must provide your name, email address, country, the currency of your account, and a phone number where you can be reached in the form that appears.</li>
                            <li>Moreover, select the language version of the website, your gender, and your actual date of birth;</li>
                            <li>Set a username and password for yourself next.</li>
                            <li>Submit the secret question's response in order to maintain security.</li>
                            <li>If you have a promo code, enter it to access more promotions.</li>
                            <li>Accept the terms of the service, then click "Submit" to finish the registration process.</li>
                            <li>Once you have funded your new 12Bet account, you can log in and start playing games for real money!</li>
                        </ol>
                    </div>
                </Col>
                <Col lg={6} md={12}>
                    <div className="account_img">
                        <img src={account} alt="" className='img-fluid d-block m-auto mt-5' />
                    </div>
                </Col>
            </Row>
            
        </Container>
     
    </div>
    </>
  )
}

export default Account