import React from 'react'
import './Burger.css'
function Burger() {
  return (
    <div className="burger">
      <div className="burger-top"></div>
      <div className="burger-item salad">salad</div>
      <div className="burger-item bacon">Bacon</div>
      <div className="burger-item cheese">Cheese</div>
      <div className="burger-item meat">Meat</div>
      <div className="burger-bottom"></div>
    </div>
  )
}

export default Burger
