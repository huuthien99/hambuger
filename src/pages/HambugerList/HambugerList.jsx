import React from 'react'

import history from './../../utils/history'
import './Hambuger.css'
import HeaderBurger from './../../components/Header'
import Burger from './../../components/burger/Burger'
import { Button } from 'antd';


const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];
function HambugerList() {
  return (
    <>
      <HeaderBurger />
      <div className="hambugerlist">
        <Burger />
        <div className="content">
          <div className="total-price">
            <p>Price</p>
            <p>5.8$</p>
          </div>
          <ul className="burger-list">
            {controls.map((item, index) => {
              return (
                <li
                  key={index}
                  className="burger-list_item"
                >
                  {item.label}
                  <div className="list-btn">
                    <Button>Less</Button>
                    <Button>More</Button>
                  </div>
                </li>
              )
            })}
          </ul>
          <Button
            type="primary"
            className='checkout-btn'
            onClick={() => history.push("/checkout")}
          >
            Checkout
            </Button>
        </div>
      </div>
    </>
  )
}


export default HambugerList
