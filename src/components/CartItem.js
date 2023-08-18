import { AddRounded, RemoveRounded } from '@mui/icons-material';
import React, { useState } from 'react';
import { useStateValue } from './StateProvider';
import { actionType } from './reducer';

function CartItem({ name, imgSrc, price, itemId }) {
  const [{ cart }, dispatch] = useStateValue();

  const cartItem = cart.find(item => item.id === itemId);
  const [qty, setQty] = useState(cartItem ? cartItem.qty : 1);

  const updateQuantity = (action) => {
    let updatedCart = [...cart];

    if (action === 'remove') {
      if (qty > 0) {
        setQty(qty - 1);
        updatedCart = updatedCart.map(item =>
          item.id === itemId ? { ...item, qty: item.qty - 1 } : item
        );
      }
    } else {
      setQty(qty + 1);
      if (cartItem) {
        updatedCart = updatedCart.map(item =>
          item.id === itemId ? { ...item, qty: item.qty + 1 } : item
        );
    }}

    dispatch({
      type: actionType.SET_CART,
      cart: updatedCart,
    });
  };

  const itemPrice = parseFloat(price) * qty;

  return (
    <div className="cardItem">
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>
      <div className="itemSection">
        <h2 className="itemName">{name}</h2>
        <div className="itemQuantity">
          <span>x {qty}</span>
          <div className="quantity">
            <RemoveRounded
              className='itemRemove'
              onClick={() => updateQuantity('remove')}
            />
            <AddRounded
              className='itemAdd'
              onClick={() => updateQuantity('add')}
            />
          </div>
        </div>
      </div>
      <div className="priceContainer">
        <p className="itemPrice">
          <span className="dollarSign">$</span>
          <span className="itemPriceValue">{itemPrice}</span>
        </p>
      </div>
    </div>
  );
}

export default CartItem;
