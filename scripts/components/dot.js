import React, { Component, PropTypes } from 'react'
import classNames from 'classnames';

export class Dot extends Component {
    static propTypes = {
        className: PropTypes.string,
        styles: PropTypes.object
    };

    render() {
        return (
            <span
                className={classNames("dot animated", this.props.className)}
                style={this.props.style}
            />
        );
    }
}