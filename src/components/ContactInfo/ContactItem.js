import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import { styles } from './ContactItem.styles';
import { css } from 'aphrodite';

class ContactItem extends React.PureComponent {

  renderWithLink() {
      return (
        <div className={css(styles.container)}>
            <a className={css(styles.link)} href={this.props.url}>
            <FontAwesomeIcon className={css(styles.icon)} icon={this.props.icon} /> {this.props.value}
            </a>
        </div>
      );
  }

  renderWithoutLink() {
      return (
        <div className={css(styles.container)}>
            <FontAwesomeIcon className={css(styles.icon)} icon={this.props.icon} /> {this.props.value}
        </div>
      );

  }
  
  render() {
      return this.props.url ? this.renderWithLink() : this.renderWithoutLink();
  }
}

ContactItem.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  url: PropTypes.string,
};

ContactItem.defaultProps = {
  className: '',
};


export default ContactItem;
