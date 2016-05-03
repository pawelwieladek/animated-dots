import React, { Component } from 'react'

import { Dots } from './dots'

export class App extends Component {
    render() {
        return (
            <div>
                <Dots
                    number={6}
                    animation="vertical" />
            </div>
        );
    }
}