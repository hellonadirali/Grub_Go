import React from 'react'
import chip from '../images/chip.png'

function DebitCard() {
  return (
    <div className="cardGroup">
        <div className="cardLogo">VISA</div>
        <img src={chip} alt="" className="cardChip" />

        <div className="cardNumber">1234 567 8920 3200</div>
        <div className="cardName">Nadir Ali</div>
        <div className="cardFrom">19/20</div>
        <div className="cardTo">10/25</div>
        <div className="cardRing"></div>
    </div>
)}

export default DebitCard