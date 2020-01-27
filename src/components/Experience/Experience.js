import React from 'react';
import PropTypes from 'prop-types';

import ExperienceItem from './ExperienceItem';

import cx from 'classnames';
import s from './Experience.css';

class Experience extends React.PureComponent {
  render() {
      return (
        <div className={cx(s.changePhoneModal, this.props.className)}>
          <h2>Experience</h2>
          {this.props.experience.map((item) => (
              <ExperienceItem {...item} />
          ))}
        </div>
      );
  }
}

Experience.propTypes = {
  className: PropTypes.string,
  experience: PropTypes.arrayOf(PropTypes.object),
};

Experience.defaultProps = {
  className: '',
};


export default Experience;
