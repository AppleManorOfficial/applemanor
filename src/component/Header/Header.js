import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { Nav } from 'react-bootstrap';
import logo from '../../image/306123745_597693085395113_5652336624228434910_n.jpg';
import RWDmenu from './RWDmenu';

function Header() {
  return (
    <>
      <Nav className="nav_menu_RWD">
        <RWDmenu className="RWD"></RWDmenu>
      </Nav>
      <Nav className="nav_menu">
        <Link to="/aboutus">
          <li>
            <p>關於蘋果莊園</p>
            <p className="english">About Us</p>
          </li>
        </Link>
        <Link to="/handmade">
          <li>
            <p>手工皂商品</p>
            <p className="english">Hand-Made Soap</p>
          </li>
        </Link>
        <Link to="/herbal">
          <li>
            <p>植物調理</p>
            <p className="english">Herbal Product</p>
          </li>
        </Link>
        <Link to="/applemanor">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </Link>
        <Link to="/living">
          <li>
            <p>居家樂活</p>
            <p className="english">Living Style</p>
          </li>
        </Link>
        <Link to="/giftbox">
          <li>
            <p>精緻禮盒</p>
            <p className="english">Gift Box</p>
          </li>
        </Link>
        <Link to="/contactus">
          <li>
            <p>聯絡我們</p>
            <p className="english">Contact Us</p>
          </li>
        </Link>
      </Nav>
    </>
  );
}

export default Header;
