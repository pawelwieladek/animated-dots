import React, { Component, PropTypes } from 'react'
import classNames from 'classnames';

import { Dot } from '../dot';

export class DiagonalDot extends Component {
    static propTypes = {
        index: PropTypes.number.isRequired,
        totalNumber: PropTypes.number.isRequired
    };

    render() {
        const { index, totalNumber } = this.props;
        const position = index / (totalNumber + 1) * 100;
        const style = {
            top: `${position}%`,
            marginLeft: `${position}%`
        };

        return (
            <Dot className="diagonal" style={style} />
        );
    }
}