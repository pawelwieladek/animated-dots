import React, { Component, PropTypes } from 'react'
import range from 'lodash/range';

import * as Animations from './animation-types';
import { VerticalDot } from './dots/vertical';
import { HorizontalDot } from './dots/horizontal';
import { DiagonalDot } from './dots/diagonal';
import { DiagonalReversedDot } from './dots/diagonal-reversed';

export class Dots extends Component {
    static propTypes = {
        number: PropTypes.number.isRequired,
        animation: PropTypes.oneOf([
            Animations.Vertical,
            Animations.Horizontal,
            Animations.Diagonal,
            Animations.DiagonalReversed
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
            <div className="dots">
                {dots}
            </div>
        );
    }
}
