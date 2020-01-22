import React from "react";
import PropTypes from "prop-types";

import "./CVHeader.css";

export default class CVHeader extends React.Component {
    static propTypes = {
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        title: PropTypes.string,
        photoURL: PropTypes.string,
    }

    render() {
        return (
            <div className="cv-header">
                <img src={this.props.photoURL} />
                {this.props.firstName} {this.props.lastName} <br/>
                {this.props.title} {this.props.photoURL} <br/>
            </div>
        );
    }
}
