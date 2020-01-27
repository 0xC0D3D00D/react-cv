import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import cx from 'classnames';


import s from './ContactItem.css';

class ContactItem extends React.PureComponent {

  renderWithLink() {
      return (
        <div className={cx(s.changePhoneModal, this.props.className)}>
            <a href={this.props.url}>
            <FontAwesomeIcon icon={this.props.icon} /> {this.props.value}
            </a>
        </div>
      );
  }

  renderWithoutLink() {
      return (
        <div className={cx(s.changePhoneModal, this.props.className)}>
            <FontAwesomeIcon icon={this.props.icon} /> {this.props.value}
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
