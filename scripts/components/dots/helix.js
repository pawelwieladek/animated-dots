import React, { Component, PropTypes } from 'react'
import classNames from 'classnames';

import { Dot } from '../dot';

export class HelixDot extends Component {
    static propTypes = {
        index: PropTypes.number.isRequired,
        totalNumber: PropTypes.number.isRequired
    };

    render() {
        const { index, totalNumber } = this.props;
        const position = (index + 1) / (totalNumber + 2) * 100;
        const style = {
            left: `${position}%`,
            top: '50%'
        };

        return (
            <Dot className="helix" style={style} />
        );
    }
}