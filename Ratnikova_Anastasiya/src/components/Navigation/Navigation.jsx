import React, {Component} from 'react';

import Button from '@material-ui/core/Button';

export class Navigation extends Component {
    render() {
        const {name} = this.props;

        return (
            <div className="menu">
                <Button variant="outlined" href="/profile">
                    Profile {name}
                </Button>
            </div>
        );
    }
}