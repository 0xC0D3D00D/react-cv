import React from 'react';
import PropTypes from 'prop-types';

import ExperienceItem from './ExperienceItem';

import s from './Experience.css';

class Experience extends React.PureComponent {
  render() {
      return (
        <div className="experience">
          <h1 className="section-header">Experience</h1>
          {this.props.experience.map((item, index) => (
              <ExperienceItem key={"experience-" + index} {...item} />
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
