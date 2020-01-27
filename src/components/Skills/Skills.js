import React from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';
import s from './Skills.css';

class Skills extends React.PureComponent {
  render() {
      return (
        <div className={cx(s.changePhoneModal, this.props.className)}>
          <h2>Skills</h2>
          {this.props.skills.map((item) => (
            <span className="skill">{item}</span>
          ))}
        </div>
      );
  }
}

Skills.propTypes = {
  className: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.string),
};

Skills.defaultProps = {
  className: '',
};


export default Skills;
