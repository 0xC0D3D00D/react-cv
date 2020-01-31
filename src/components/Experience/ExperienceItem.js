import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

import s from './ExperienceItem.css';

class ExperienceItem extends React.PureComponent {
  render() {
      return (
        <div className="experience">
          <span className="title">
            {this.props.jobTitle}
            <span className="location"> ({this.props.location}) </span>
          </span>
          <span className="organization">
            {this.props.organization}
            <span className="date"> (
              {this.props.startDate.format("MM/YYYY")} - {this.props.endDate == null ? "Present" : this.props.endDate.format("MM/YYYY")}
            )</span>
          </span>
          <span className="organizationDescr">{this.props.organizationDescription}</span>
          <ul>
          {this.props.achievements.map((achievement, index) => (
              <li className="itemDescr" key={"experience-item-achievement-" + index}>{achievement}</li>
          ))}
          </ul>
        </div>
      );
  }
}

ExperienceItem.propTypes = {
  className: PropTypes.string,
  jobTitle: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  organizationDescription: PropTypes.string,
  location: PropTypes.string,
  startDate: PropTypes.instanceOf(Moment).isRequired,
  endDate: PropTypes.instanceOf(Moment),
  achievements: PropTypes.arrayOf(PropTypes.string),
};

ExperienceItem.defaultProps = {
  className: '',
  organizationDescription: null,
  location: null,
  endDate: null,
  achievements: null,
};


export default ExperienceItem;
