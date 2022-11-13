import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import faceBook from '../../image/facebook.png';
import line from '../../image/line.png';

function Footer() {
  return (
    <footer>
      <div className="contact-icon">
        <img
          className="icons"
          src={faceBook}
          width="50"
          height="50"
          alt=""
          onClick={() => {
            window.location.href = 'https://zh-tw.facebook.com/AppleManorTW/';
          }}
        />
        <img
          className="icons"
          src={line}
          width="50"
          height="50"
          alt=""
          onClick={() => {
            window.location.href =
              'https://liff.line.me/1645278921-kWRPP32q/?accountId=cow0971v';
          }}
        />
      </div>
      <div className="copyright">
        <div>聯絡我們 : 02-27115939</div>
        <div>© 2022 Apple Manor All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
