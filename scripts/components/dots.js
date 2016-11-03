import React, { Component, PropTypes } from 'react'
import range from 'lodash/range';
import classNames from 'classnames';

import * as Animations from './animation-types';
import { VerticalDot } from './dots/vertical';
import { HorizontalDot } from './dots/horizontal';
import { DiagonalDot } from './dots/diagonal';
import { DiagonalReversedDot } from './dots/diagonal-reversed';
import { RotatingLineDot } from './dots/rotating-line';
import { RotatingSquareDot } from './dots/rotating-square';
import { HelixDot } from './dots/helix';

export class Dots extends Component {
    static propTypes = {
        number: PropTypes.number.isRequired,
        animation: PropTypes.oneOf([
            Animations.Vertical,
            Animations.Horizontal,
            Animations.Diagonal,
            Animations.DiagonalReversed,
            Animations.RotatingLine,
            Animations.RotatingSquare,
            Animations.Helix
        ]).isRequired
    };

    getDotComponent() {
        switch (this.props.animation) {
            case Animations.Vertical:
                return VerticalDot;
            case Animations.Horizontal:
                return HorizontalDot;
            case Animations.Diagonal:
                return DiagonalDot;
            case Animations.DiagonalReversed:
                return DiagonalReversedDot;
            case Animations.RotatingLine:
                return RotatingLineDot;
            case Animations.RotatingSquare:
                return RotatingSquareDot;
            case Animations.Helix:
                return HelixDot;
            default:
                throw new Error(`Animation type ${this.props.animation} is not defined.`);
        }
    }

    renderDots() {
        return range(0, this.props.number).map(i => {
            const Dot = this.getDotComponent();
            return (
                <Dot
                    key={i}
                    index={i}
                    totalNumber={this.props.number}
                />
            )
        });
    }

    render() {
        const dots = this.renderDots();
        return (
            <div className={classNames('dots', 'animated', this.props.animation)}>
                {dots}
            </div>
        );
    }
}
