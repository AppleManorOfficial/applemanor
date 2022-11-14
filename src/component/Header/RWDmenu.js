import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineKeyboardReturn } from 'react-icons/md';
import './RWDmenu.scss';
import logo from '../../image/306123745_597693085395113_5652336624228434910_n.jpg';

function RWDmenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    window.addEventListener('resize', handleClose);
  }, []);

  return (
    <>
      <div className="click">
        {show ? (
          <MdOutlineKeyboardReturn
            variant="primary"
            onClick={handleClose}
            className="click_icon"
          ></MdOutlineKeyboardReturn>
        ) : (
          <GiHamburgerMenu
            variant="primary"
            onClick={handleShow}
            className="click_icon"
          ></GiHamburgerMenu>
        )}
        <Link to="/applemanor">
          <div className="logo">
            <img src={logo} width="60" height="60" alt="" />
          </div>
        </Link>
      </div>

      <Offcanvas
        show={show}
        onHide={handleClose}
        onClick={handleClose}
        className="RWDshow"
        scroll="true"
        backdrop="false"
      >
        <Offcanvas.Body className="RWD_body">
          <div className="RWD_body_click">
            <Link to="/aboutus" onClick={handleClose}>
              <li>
                <div>關於蘋果莊園 About Us</div>
              </li>
            </Link>
            <Link to="/handmade" onClick={handleClose}>
              <li>
                <div>手工皂商品 Hand-Made Soap</div>
              </li>
            </Link>
            <Link to="/herbal" onClick={handleClose}>
              <li>
                <div>植物調理 Herbal Product</div>
              </li>
            </Link>
            <Link to="/living" onClick={handleClose}>
              <li>
                <div>居家樂活 Living Style</div>
              </li>
            </Link>
            <Link to="/giftbox" onClick={handleClose}>
              <li>
                <div>精緻禮盒 Gift Box</div>
              </li>
            </Link>
            <Link to="/contactus" onClick={handleClose}>
              <li>
                <div>聯絡我們 Contact Us</div>
              </li>
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default RWDmenu;
