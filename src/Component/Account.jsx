import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

function handleToken(token, addresses){
    console.log({token, addresses})
}

function Account () {
    <div>
        <div class='wrapper'>
            <div class='left'>
                <h2>Welcome Spencer</h2>
            </div>
            <div class='right'>
                <div class='data'>
                    <h3>Email</h3>
                    <p>sbottomley44@gmail.com</p>
                </div>
                <div class='data'>
                    <h4>Monthly Membership Payment</h4>
                    <p>$139</p>
                    <StripeCheckout
                    stripeKey=""
                    token={handleToken}
                    amount={139.00*100}
                    name={"Esteem BJJ Membership"}
                />
                </div>
            </div>
        </div>
        <div class='projects'>
            <h3>Your Scheduled Private Lessons</h3>
            <div class='projects_data'>
                <h4>Private Lessons</h4>
                <p>Your have no private lessons</p>
            </div>
        </div>
    </div>
}
export default Account;