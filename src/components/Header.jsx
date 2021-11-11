import React from 'react'
import history from './../utils/history'
import './Header.css'


function HeaderBurger() {
  return (
    <div className='header'>
      <ul className='header-list'>
        <li
          className='header-list_item'
          onClick={() => history.push("/")}
        >
          Burger Builder
        </li>
        <li
          className='header-list_item'
          onClick={() => history.push("/login")}
        >
          Login
        </li>
      </ul>
    </div>
  )
}

export default HeaderBurger
