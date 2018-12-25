import React from 'react';
import BurgerButton from './burgerbutton';
import './dropdown-menu.css';


export function DropdownMenu (){
    return (
      <section className="navigation">
<div className="dropdown">
  <button className="dropbtn">
  <BurgerButton/>
  </button>
  <div className="dropdown-content">
  <a href="#home">home</a>
    <a href="#about">About Me</a>
    <a href="#work">Work</a>
    <a href="#">Link 3</a>
  </div>
</div>
</section>
    )
}

export default DropdownMenu;