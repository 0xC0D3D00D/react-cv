import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

import Utils from '../../utils/utils';

import s from './ExperienceItem.css';

class ExperienceItem extends React.PureComponent {
  constructor(props) {
      super(props);
  }

  render() {
      let a = Moment();
      return (
        <div className="experience-item">
          {this.props.title}
          {this.props.organization}
          {this.props.description}
          {this.props.location}
          {this.props.startDate.format("MM/YYYY")} - {this.props.endDate == null ? "Present" : this.props.endDate.format("MM/YYYY")}
          <ul>
          {this.props.achievements.map((achievement, index) => (
              <li>{achievement}</li>
          ))}
          </ul>
        </div>
      );
  }
}

ExperienceItem.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  description: PropTypes.string,
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
