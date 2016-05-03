import React, { Component, PropTypes } from 'react'

import { Dot } from './dot'

function* range(start, stop) {
    for (let i = start; i < stop; i++)
        yield i;
}

export class Dots extends Component {
    static propTypes = {
        number: PropTypes.number.isRequired,
        animation: PropTypes.oneOf([
            'vertical'
        ]).isRequired
    };

    render() {
        const dots = [...range(0, this.props.number)].map(i => {
            const position = (i + 1) / (this.props.number + 1) * 100;
            const style = {
                left: `${position}%`
            };
            return (
                <Dot key={i} style={style} />
            );
        });
        return (
            <div className="dots">
                {dots}
            </div>
        );
    }
}