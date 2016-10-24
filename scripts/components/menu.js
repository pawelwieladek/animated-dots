import React, { Component, PropTypes } from 'react'
import classNames from 'classnames';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Settings from 'material-ui/svg-icons/action/settings';

import * as Animations from './animation-types';

export class Menu extends Component {
    static propTypes = {
        animation: PropTypes.string,
        onChange: PropTypes.func
    };

    handleChange = (event, value) => {
        this.props.onChange(value);
    };

    render() {
        return (
            <div className="menu">
                <IconMenu
                    iconButtonElement={(
                        <IconButton>
                            <Settings />
                        </IconButton>
                    )}
                    anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                    targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                    maxHeight={272}
                    value={this.props.animation}
                    onChange={this.handleChange}
                >
                    <MenuItem value={Animations.Vertical} primaryText="Vertical" />
                    <MenuItem value={Animations.Horizontal} primaryText="Horizontal" />
                </IconMenu>
            </div>
        );
    }
}