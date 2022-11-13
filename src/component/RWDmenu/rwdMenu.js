import React from 'react';
import IoChevronBack from 'react-icons/io';

function rwdMenu() {
  return (
    <>
      <div>
        <IoChevronBack></IoChevronBack>
      </div>
      <ul className="RWDmenu">
        <li>關於蘋果莊園 About Us</li>
        <li>手工皂商品 Hand-Made Soap</li>
        <li>植物調理 Herbal Product</li>
        <li>居家樂活 Living Style</li>
        <li>精緻禮盒 Gift Box</li>
        <li>聯絡我們 Contact Us</li>
      </ul>
    </>
  );
}

export default rwdMenu;
