import React, { Component, PropTypes } from 'react'
import classNames from 'classnames';

export class Dot extends Component {
    static propTypes = {
        classNames: PropTypes.string,
        styles: PropTypes.object
    };
    render() {
        return (
            <div
                className={classNames("dot animated vertical", this.props.classNames)}
                style={this.props.style}></div>
        );
    }
}