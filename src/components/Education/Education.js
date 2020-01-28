import React from 'react';
import PropTypes from 'prop-types';

import EducationItem from './EducationItem';

import s from './Education.css';

class Education extends React.PureComponent {
  constructor(props) {
      super(props);
  }

  render() {
      return (
        <div className={"education"}>
          <h2>Education</h2>
          {this.props.education.map((item, index) => (
              <EducationItem {...item} />
          ))}
        </div>
      );
  }
}

Education.propTypes = {
  className: PropTypes.string,
  education: PropTypes.arrayOf(PropTypes.object),
};

Education.defaultProps = {
  className: '',
};


export default Education;
