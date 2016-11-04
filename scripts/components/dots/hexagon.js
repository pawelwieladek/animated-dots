import React, { Component, PropTypes } from 'react'
import classNames from 'classnames';

import { Dot } from '../dot';

export class HexagonDot extends Component {
    static propTypes = {
        index: PropTypes.number.isRequired,
        totalNumber: PropTypes.number.isRequired
    };

    render() {
        const { index, totalNumber } = this.props;
        const position = (index + 1) / (totalNumber + 2) * 100;
        const style = {
            left: `${position}%`,
        };

        return (
            <Dot className="hexagon" style={style} />
        );
    }
}