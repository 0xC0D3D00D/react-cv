import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';

import { styles } from './Header.styles';

class Header extends React.PureComponent {
  render() {
    return (
      <div className={css(styles.headerContainer)}>
        <h1 className={css(styles.name)}>
            { this.props.firstName } { this.props.lastName }
        </h1>
        <div className={css(styles.title)}>
            { this.props.title }
        </div>
        <div className={css(styles.summary)}>
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
