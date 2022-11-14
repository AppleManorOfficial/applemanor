import React, { useState } from 'react';
import './ContactUs.scss';
import faceBook from '../../image/facebook.png';
import line from '../../image/line.png';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineClose } from 'react-icons/ai';
import QRcode from '../../image/QRcode.jpg';

function ContatctUs() {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <div className="contactUs">
        <div className="contactUs_title">
          聯絡我們 <br></br>
          Contact Us
        </div>
        <div className="contactUs_content">
          <p>如果對於以上商品有任何興趣,歡迎透過以下方式聯絡</p>
          <hr></hr>
          <div className="contact_method">
            <div className="method">
              <img
                className="contact_icon"
                src={faceBook}
                alt=""
                onClick={() => {
                  window.location.href =
                    'https://zh-tw.facebook.com/AppleManorTW/';
                }}
              />
              <img
                className="contact_icon"
                src={line}
                alt=""
                onClick={() => {
                  window.location.href =
                    'https://liff.line.me/1645278921-kWRPP32q/?accountId=cow0971v';
                }}
              />
            </div>
            <div className="QRbtn" onClick={handleShow}>
              點我看QR code
            </div>
            <div className="contact_phone"> 聯絡我們 : 02-27115939</div>
          </div>
        </div>
      </div>

      <Offcanvas
        show={show}
        onHide={handleClose}
        onClick={(e) => {
          handleClose();
        }}
        className="show2"
        scroll="fales"
        backdrop="true"
      >
        <Offcanvas.Body
          className="QRcodeBox"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <AiOutlineClose
            onClick={handleClose}
            className="closeMe"
          ></AiOutlineClose>
          <img src={QRcode} alt="" />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ContatctUs;
