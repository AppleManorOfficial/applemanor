import './productList-Living.scss';
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineClose } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';
import details from './details';

function ProductListLiving() {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  const [readMore, setReadMore] = useState(false);
  const [productID, setProductID] = useState('');
  //展開說明文字
  const contentToggle = () => {
    if (readMore === false) {
      setReadMore(true);
    } else {
      setReadMore(false);
    }
  };

  const collection3 = details.filter((item) => item.product_collection === 3);
  const productDetail = details.filter((item) => item.id === productID);

  return (
    <>
      <div className="livingAll">
        <div className="living">
          <div className="living_title">
            居家樂活
            <br></br>
            Living Style
          </div>
          <div className="living_content">
            <p style={{ WebkitLineClamp: readMore ? '15' : '2' }}>
              獨家天然草本配方，溫和自然，具有嫩白、緊緻、青春等功效。
              運用中草藥之特性，由內而外調理修護肌膚，
              從而讓肌膚恢復自主平衡的狀態，呈現健康細緻亮麗。
              唯有透過漢方保養的概念，全面性調理修乎肌膚，
              天然草本配方不添加任何化學物品，
              讓您的肌膚得到真正的健康是最上等之成品。
              絕對是您用過最好的手工皂。
            </p>
            <button className="readMore" onClick={contentToggle}>
              {readMore ? '收回' : '展開介紹'}
            </button>
            <hr />
          </div>
          <div className="productList_detail">
            {collection3.map((data, id) => {
              const img = require('../../image/' + data.product_cover);
              return (
                <>
                  <li
                    key={id}
                    className="product_card"
                    value={data.id}
                    onClick={() => {
                      handleShow();
                      setProductID(data.id);
                    }}
                  >
                    <div className="product_photo">
                      <img src={img} alt="" style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="product_title">{data.product_name}</div>
                    <div className="product_description">
                      {data.product_description}
                    </div>
                  </li>
                </>
              );
            })}
          </div>
        </div>
        <Offcanvas
          show={show}
          onHide={handleClose}
          onClick={(e) => {
            handleClose();
          }}
          className="show1"
          scroll="true"
          backdrop="true"
        >
          <Offcanvas.Body
            className="product_detail"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {productDetail.map((data, index) => {
              let detailList = data.product_detail
                .split(/[$]/)
                .filter((item) => item);
              const imgDetail = require('../../image/' + data.product_cover);
              return (
                <>
                  <div className="content_card" key={index}>
                    <div className="product_info">
                      <p>商品資訊</p>
                    </div>
                    <div className="product_photo">
                      <img
                        src={imgDetail}
                        alt=""
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="content_box">
                      <div className="product_title">{data.product_name}</div>
                      <div className="product_description">
                        {data.product_description}
                      </div>

                      <div className="product_origin">
                        <TiTick className="tick_icon"></TiTick>產地：
                        {data.product_origin}
                      </div>
                      <div className="product_content">
                        <TiTick className="tick_icon"></TiTick>主要成分：
                        {data.product_content}
                      </div>
                      <div className="product_spec">
                        <TiTick className="tick_icon"></TiTick>規格：
                        {data.product_spec}
                      </div>
                      {data.product_instruction === null ? (
                        ''
                      ) : (
                        <div className="product_remark">
                          <TiTick className="tick_icon"></TiTick>使用方法：
                          {data.product_instruction}
                        </div>
                      )}
                      {data.product_preserve === null ? (
                        ''
                      ) : (
                        <div className="product_remark">
                          <TiTick className="tick_icon"></TiTick>保存方法：
                          {data.product_preserve}
                        </div>
                      )}
                      {data.product_preserve_time === null ? (
                        ''
                      ) : (
                        <div className="product_remark">
                          <TiTick className="tick_icon"></TiTick>保存期限：
                          {data.product_preserve_time}
                        </div>
                      )}
                      <div className="product_remark">
                        {detailList.map((data, index) => {
                          return (
                            <>
                              <div className="product_remark">
                                <TiTick className="tick_icon"></TiTick>
                                {data}
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                    <AiOutlineClose
                      className="closeButton"
                      onClick={handleClose}
                      style={{ width: '30', height: '30', color: '#7c4b4b' }}
                    ></AiOutlineClose>
                  </div>
                </>
              );
            })}
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default ProductListLiving;
