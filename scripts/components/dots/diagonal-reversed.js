import React, { Component, PropTypes } from 'react'
import classNames from 'classnames';

import { Dot } from '../dot';

export class DiagonalReversedDot extends Component {
    static propTypes = {
        index: PropTypes.number.isRequired,
        totalNumber: PropTypes.number.isRequired
    };

    render() {
        const { index, totalNumber } = this.props;
        const top = index / (totalNumber + 1) * 100;
        const marginLeft = (totalNumber - index - 1) / (totalNumber + 1) * 100 - 50;
        const style = {
            top: `${top}%`,
            marginLeft: `${marginLeft}%`
        };

        return (
            <Dot className="diagonal-reversed" style={style} />
        );
    }
}