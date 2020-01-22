import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './header.css';

function Header ({ className }) {
  return (
    <div className={cx(s.changePhoneModal, className)}>
      Header...
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: '',
};


export default Header;
