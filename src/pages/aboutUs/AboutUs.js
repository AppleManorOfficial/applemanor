import React from 'react';
import './AboutUs.scss';

function aboutUs() {
  return (
    <div className="aboutUs">
      <div className="aboutUs_titile">
        {' '}
        <div>關於蘋果莊園</div>
        <div>About Apple Manor</div>
      </div>
      <div className="aboutUs_content">
        <p>
          我們重視每一個細節，傳承中國古老漢方的純樸與自然，堅持天然環保，秉持『回歸自然』的理念
          <br></br>
          以天然植物為基礎，以最溫和、最自然的特性，創造精緻環保且安全的高品質天然草本生活。
        </p>
        <hr></hr>
      </div>

      <div className="aboutUs_concept">
        <div className="concept_box">
          <div className="wrap1">
            <div className="layer1">
              {/* <div className="clip">承諾</div> */}
              <span className="wrap1">
                堅持草本<br></br>崇尚自然
              </span>
            </div>
          </div>
          <div className="photo1">
            <span className="photo_text">
              堅持草本<br></br>崇尚自然
            </span>
          </div>
        </div>
        <div className="concept_box">
          <div className="wrap2">
            <div className="layer2">
              {/* <div className="clip">承諾</div> */}
              <span className="wrap2">
                精緻環保<br></br>草本生活
              </span>
            </div>
          </div>
          <div className="photo2">
            <span className="photo_text">
              精緻環保<br></br>草本生活
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default aboutUs;
