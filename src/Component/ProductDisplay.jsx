import React from "react";
import jiujitsu from './images/jiujitsu.jpg'
import success from './images/success.jpg'


const ProductDisplay = () => (
  <section>
    <div className="product">
      <img
        src={jiujitsu}
        alt="triangle"
      />
      <div className="product">
      <h3>Private Lesson</h3>
      <h5>$100.00</h5>
      </div>
    </div>
    <div className="product">
    <form action='https://buy.stripe.com/test_eVaeVZ5jtfYu8xi7ss'>
      <button type='submit' className="product">
        Checkout
      </button>
    </form>
    </div>

    <div className="product">
      <img
        src={success}
        alt="triangle"
      />
      <div className="product">
      <h3>Monthly Dues</h3>
      <h5>$139.00</h5>
      </div>
    </div>
    <div className="product">
    <form action='https://buy.stripe.com/test_6oE7txbHRh2ybJu289'>
      <button type='submit'>
        Checkout
      </button>
    </form>
    </div>
  </section>
);

export default ProductDisplay;