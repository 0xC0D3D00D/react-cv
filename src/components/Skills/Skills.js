import React from 'react';
import PropTypes from 'prop-types';

import s from './Skills.css';

class Skills extends React.PureComponent {
  render() {
      return (
        <div className={"skills"}>
          <h2>Skills</h2>
          {this.props.skills.map((item, index) => (
            <span className="skill" key={"skill-" + index}>{item}</span>
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
