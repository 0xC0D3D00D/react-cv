import React from 'react';
import PropTypes from 'prop-types';

import { PhoneNumberUtil, PhoneNumberFormat } from 'google-libphonenumber';

import { faPhone, faMapMarker, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faGitlab, faStackOverflow, faTwitter, faSkype, faReddit } from '@fortawesome/free-brands-svg-icons';

import ContactItem from './ContactItem';
import Utils from '../../utils/utils';
import { LinkedinUrlMatcher } from '../../utils/Validator';

import { css } from 'aphrodite';
import { styles } from './ContactInfo.styles.js';

class ContactInfo extends React.PureComponent {
  constructor(props) {
      super(props);

      this.phoneUtil = PhoneNumberUtil.getInstance();
      this.state = {errors: [], contactInfo: []};
  }

  addError(error) {
      let exists = this.state.errors.find(function(value) {
          return value === error;
      });

      if (exists) {
          return null;
      }

      let clone = this.state.errors.splice(0);
      clone.push(error);
      this.setState({errors: clone});
  }

  componentDidMount() {
      let info = [];
      if (this.props.location) {
          info.push({
            title: "Location",
            icon: faMapMarker,
            value: this.props.location,
          });
      }
      if (this.props.website) {
          info.push({
            title: "Website",
            icon: faHome,
            value: this.props.website,
            URL: this.props.website,
          });
      }
      if (this.props.phone) {
          info.push({
            title: "Phone",
            icon: faPhone,
            value: this.getFormattedPhone(PhoneNumberFormat.INTERNATIONAL),
            URL: this.getFormattedPhone(PhoneNumberFormat.RFC3966),
          });
      }
      if (this.props.email) {
          info.push({
            title: "Email",
            icon: faEnvelope,
            value: this.getEmail(),
            URL: this.getEmailURL(),
          });
      }
      if (this.props.github) {
          info.push({
            title: "GitHub",
            icon: faGithub,
            value: this.getGithubUsername(),
            URL: this.getGithubURL(),
          });
      }
      if (this.props.gitlab) {
          info.push({
            title: "Gitlab",
            icon: faGitlab,
            value: this.getGitlabUsername(),
            URL: this.getGitlabURL(),
          });
      }
      if (this.props.linkedin) {
          info.push({
            title: "LinkedIn",
            icon: faLinkedin,
            value: this.getLinkedinUsername(),
            URL: this.getLinkedinURL(),
          });
      }

      this.setState({contactInfo: info});
  }

  getLinkedinUsername() {
      if (!this.props.linkedin) {
          return null;
      }

      let matches = LinkedinUrlMatcher.exec(this.props.linkedin);
//      let matches = this.props.linkedin.match(LinkedinUrlMatcher);
      if (matches != null && matches.length === 2) {
          return matches[1];
      }

      if (!Utils.isAlphaNumeric(this.props.linkedin)) {
          this.addError("Linkedin is invalid, Should be a URL or username");
      }

      return this.props.linkedin;
  }

  getLinkedinURL() {
      if (!this.props.linkedin) {
          return null;
      }

      if (LinkedinUrlMatcher.test(this.props.linkedin)) {
          return this.props.linkedin;
      }

      if (!Utils.isAlphaNumeric(this.props.linkedin)) {
          this.addError("Linkedin is invalid, Should be a URL or username");
          return this.props.linkedin;
      }

      return 'https://www.linkedin.com/in/' + this.props.linkedin;
  }

  getPhone() {
      if (!this.props.phone) {
          return null;
      }

      let number;

      try {
          number = this.phoneUtil.parseAndKeepRawInput(this.props.phone);
      } catch(e) {
          this.addError("Phone number is invalid, " + e.message);
          return null;
      }

      if (!this.phoneUtil.isValidNumber(number)) {
          this.addError("Phone number is invalid");
          return null;
      }

      return number;
  }

  getFormattedPhone(format: PhoneNumberFormat) {
      let phone = this.getPhone();
      if (!phone) {
          return this.props.phone;
      }

      return this.phoneUtil.format(phone, format);
  }

  getEmail() {
      if (!this.props.email) {
          return null;
      }

    const emailMatcher = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailMatcher.test(this.props.email)) {
          this.addError("Email is invalid");
      }

      return this.props.email;
  }

  getEmailURL() {
      if (!this.props.email) {
          return null;
      }

      return 'mailto:' + this.getEmail();
  }

  getGithubUsername() {
      if (!this.props.github) {
          return null;
      }

      const githubUrlMatcher = /(?:^http[s]?:\/\/)?(?:w{3}\.)?github\.com\/([a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38})[/]?$/gm
      let matches = githubUrlMatcher.exec(this.props.github);
      if (matches != null) {
          return matches[1];
      }

      if (!Utils.isValidGithubUsername(this.props.github)) {
          this.addError("Github is invalid, Should be a URL or a valid username");
      }

      return this.props.github;
  }

  getGithubURL() {
      if (!this.props.github) {
          return null;
      }

      const githubUrlMatcher = /(?:^http[s]?:\/\/)?(?:w{3}\.)?github\.com\/([a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38})[/]?$/gm
      let matches = githubUrlMatcher.exec(this.props.github);
      if (matches != null) {
        return 'https://github.com/' + matches[1];
      }

      if (!Utils.isValidGithubUsername(this.props.github)) {
          this.addError("Github is invalid, Should be a URL or a valid username");
      }

      return 'https://github.com/' + this.props.github;

  }

  getGitlabUsername() {
      if (!this.props.gitlab) {
          return null;
      }

      const gitlabUrlMatcher = /(?:^http[s]?:\/\/)?(?:w{3}\.)?gitlab\.com\/([a-z\d.](?:[a-z\d.]|-(?=[a-z\d])){0,255})[/]?$/gm
      let matches = gitlabUrlMatcher.exec(this.props.gitlab);
      if (matches != null) {
          return matches[1];
      }

      if (!Utils.isValidGitlabUsername(this.props.gitlab)) {
          this.addError("Gitlab is invalid, Should be a URL or a valid username");
      }

      return this.props.gitlab;
  }

  getGitlabURL() {
      if (!this.props.gitlab) {
          return null;
      }

      const gitlabUrlMatcher = /(?:^http[s]?:\/\/)?(?:w{3}\.)?gitlab\.com\/([a-z\d.](?:[a-z\d.]|-(?=[a-z\d])){0,255})[/]?$/gm
      let matches = gitlabUrlMatcher.exec(this.props.gitlab);
      if (matches != null) {
        return 'https://gitlab.com/' + matches[1];
      }

      if (!Utils.isValidGitlabUsername(this.props.gitlab)) {
          this.addError("Gitlab is invalid, Should be a URL or a valid username");
      }

      return 'https://gitlab.com/' + this.props.gitlab;

  }

  getTwitterURL() {
  }
 
  render() {
      return (
        <div className={css(styles.container)}>
          <div className={css(styles.innerContainer)}>
            {this.state.errors}
            {this.state.contactInfo.map((item, index) => (
              <ContactItem icon={item.icon} key={item.title} value={item.value} url={item.URL} />
            ))}
          </div>
        </div>
      );
      /*
          {this.props.stackoverflow ? (<ContactItem icon={faStackOverflow} value={this.props.stackoverflow} />) : null}
          {this.props.twitter ? (<ContactItem icon={faTwitter} value={this.props.twitter} />) : null}
          {this.props.skype ? (<ContactItem icon={faSkype} value={this.props.skype}/>) : null}
          {this.props.reddit ? (<ContactItem icon={faReddit} value={this.props.reddit}/>) : null}
          */

  }
}

ContactInfo.propTypes = {
  className: PropTypes.string,
  phone: PropTypes.string,
  location: PropTypes.string,
  email: PropTypes.string,
  website: PropTypes.string,
  github: PropTypes.string,
  linkedin: PropTypes.string,
  gitlab: PropTypes.string,
  stackoverflow: PropTypes.string,
  twitter: PropTypes.string,
  skype: PropTypes.string,
  reddit: PropTypes.string,
};

ContactInfo.defaultProps = {
  className: '',
  location: null,
  phone: null,
  email: null,
  website: null,
  github: null,
  linkedin: null,
  gitlab: null,
  stackoverflow: null,
  twitter: null,
  skype: null,
  reddit: null,
};


export default ContactInfo;
