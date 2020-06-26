import React, {Component} from 'react';

import Button from '@material-ui/core/Button';

export class Navigation extends Component {
    render() {
        return (
            <div className="menu">
                <Button variant="outlined" href="/profile">
                    Profile
                </Button>
            </div>
        );
    }
}