import React from 'react';
import Button from './Button';
import './Item.css';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Item = ({
  title,
  desc,
  backgroundImg,
  leftBtnTxt,
  leftBtnLink,
  rightBtnTxt,
  rightBtnLink,
  twoButtons,
  first,
  footer,
}) => {
  return (
    <div
      className="item"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className="item_container">
        <div className="item_text">
          <p>{title}</p>
          <div className="item_textDesc">
            <p>{desc}</p>
          </div>
        </div>
        <div className="item_lowerThird">
          <div className="item_buttons">
            <Button imp="primary" text={leftBtnTxt} link={leftBtnLink} />
            {twoButtons && (
              <Button imp="secondary" text={rightBtnTxt} link={rightBtnLink} />
            )}
          </div>
          {first && (
            <div className="item_expand">
              <ExpandMoreIcon />
            </div>
          )}
        </div>
        {footer && (
          <div className="footer">
            <p>Tesla © 2021</p>
            <p>Privacy & Legal</p>
            <p>Contact</p>
            <p>Careers</p>
            <p>Get Newsletter</p>
            <p>News</p>
            <p>Forums</p>
            <p>Location</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Item;
