import React from 'react';
import PropTypes from 'prop-types';
import s from './Header.css';

class Header extends React.PureComponent {
  render() {
    return (
      <div className="header">
        <h1 className="headerTitle">
            { this.props.firstName } { this.props.lastName }
        </h1>
        <div className="headerPosition">
            { this.props.title }
        </div>
        <div className="headerInfo">
            { this.props.summary }
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  className: PropTypes.string,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
};

Header.defaultProps = {
  className: '',
};


export default Header;
