import React from 'react';
import { NavLink } from 'react-router-dom';


function Menu() {
  return (
    <div id="menu">
      <br />
      <br />
      <br />
      <span className="firstheading"><h1 >Menu</h1></span>
      <br />
      <br />
      <br />
      <div className="shah">
        <div className="fullmenu bold"><NavLink to="/menu/dinner"  >Meal<div className="bgpic" id="dinner"></div></NavLink></div>
        <div className="fullmenu bold"><NavLink to="/menu/fastfood">FastFood<div className="bgpic" id="fastfood"></div></NavLink></div>
        <div className="fullmenu bold"><NavLink to="/menu/drink">Cold Drink<div className="bgpic" id="drink"></div></NavLink></div>
        <div className="fullmenu bold"><NavLink to="/Menu/icecream">Sweets<div className="bgpic" id="icecream"></div></NavLink></div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
export default Menu;