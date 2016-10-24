import React, { Component } from 'react'

import * as Animations from './animation-types';
import { Dots } from './dots';
import { Menu } from './menu';

export class App extends Component {
    state = {
        animation: Animations.Vertical
    };

    handleChange = (animation) => this.setState({ animation });

    render() {
        return (
            <div className="app">
                <Menu
                    animation={this.state.animation}
                    onChange={this.handleChange}
                />
                <Dots
                    number={11}
                    animation={this.state.animation}
                />
            </div>
        );
    }
}