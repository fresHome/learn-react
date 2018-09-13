import React from 'react';
import PropTypes from 'prop-types';
import './TabMenu.css'

const TabMenu = ({current}) => {
  return (
    <div className="tabMenu">
      <div className={`tabMenu__btn ${current === 'movie' && 'tabMenu__btn--active'}`}>
        <i className="tabMenu__icon tabMenu__icon--movie"></i>
        <span className="tabMenu__text">电影</span>
      </div>
      <div className={`tabMenu__btn ${current === 'user' && 'tabMenu__btn--active'}`}>
        <i className="tabMenu__icon tabMenu__icon--user"></i>
        <span className="tabMenu__text">我的</span>
      </div>
    </div>
  );
};

TabMenu.propTypes = {};

export default TabMenu;
