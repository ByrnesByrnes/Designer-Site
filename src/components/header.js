import React, { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import { UseClickOutside } from '../hooks/useClickOutside'


export default function Header() {
  const [toggle, setToggle] = useState(false)

  const domNode = UseClickOutside(() => {
    setToggle(false)
  });

  return (
    <header className="header">
      <div className="col-1">
        <a href="#" className="logo">Logo</a>
        <nav>
          <GiHamburgerMenu 
            className="menu"
            onClick={() => setToggle(true)}
          />
          <ul ref={domNode} className={`nav__list ${toggle ? 'open' : ''}`}>
            <AiOutlineClose 
              className="menu-close"
              onClick={() => setToggle(false)}
            />
            <li className="nav__link"><a href="#">About</a></li>
            <li className="nav__link"><a href="#">Our Work</a></li>
            <li className="nav__link"><a href="#">Services</a></li>
          </ul>
        </nav>
      </div>
      <button className="get-quote white">Get a Quote</button>
    </header>
  )
}
