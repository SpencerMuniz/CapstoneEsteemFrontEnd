import React from "react";
import jiujitsu from './images/jiujitsu.jpg'


const ProductDisplay = () => (
  <section>
    <div className="product">
      <img
        src={jiujitsu}
        alt="triangle"
      />
      <div className="description">
      <h3>Private Lesson</h3>
      <h5>$100.00</h5>
      </div>
    </div>
    <form action='https://buy.stripe.com/test_eVaeVZ5jtfYu8xi7ss'>
      <button type='submit'>
        Checkout
      </button>
    </form>
  </section>
);

export default ProductDisplay;