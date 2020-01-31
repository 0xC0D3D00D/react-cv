import React from 'react';
import PropTypes from 'prop-types';

import s from './Skills.css';

class Skills extends React.PureComponent {
  render() {
      return (
        <div className={"skills"}>
          <h1 className="section-header">Skills</h1>
          <div className="skill">
            {this.props.skills.map((item, index) => (
              <span className="skill" key={"skill-" + index}>{item}</span>
            ))}
          </div>
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
