import React, { Component, PropTypes } from 'react'
import classNames from 'classnames';

import { Dot } from '../dot';

export class RotatingSquareDot extends Component {
    static propTypes = {
        index: PropTypes.number.isRequired,
        totalNumber: PropTypes.number.isRequired
    };

    getStyle() {
        const { index, totalNumber } = this.props;
        const dotsInLine = Math.ceil(totalNumber / 4);
        const lineNumber = Math.floor(index / dotsInLine);
        const dotIndexInLine = index % dotsInLine;
        const ratio = ((dotIndexInLine + 1) / (dotsInLine + 1)) * 100;
        if (lineNumber === 0) {
            return {
                top: 0,
                left: `${ratio}%`
            };
        }
        if (lineNumber === 1) {
            return {
                top: `${ratio}%`,
                left: '100%'
            };
        }
        if (lineNumber === 2) {
            return {
                top: '100%',
                left: `${ratio}%`
            };
        }
        if (lineNumber === 3) {
            return {
                top: `${ratio}%`,
                left: 0
            };
        }
    }

    render() {


        return (
            <Dot className="rotating-line" style={this.getStyle()} />
        );
    }
}