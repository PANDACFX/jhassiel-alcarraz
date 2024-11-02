import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartWidget() {
  return (
    <div className="cart-widget d-flex align-items-center">
      <FontAwesomeIcon icon={faShoppingCart} className="me-2" /> {/* Usa FontAwesomeIcon */}
      <span className="badge bg-primary rounded-pill">3</span>
    </div>
  );
}

export default CartWidget;
