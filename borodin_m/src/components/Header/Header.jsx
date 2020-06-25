import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person';
import TextsmsIcon from '@material-ui/icons/Textsms';
import Button from '@material-ui/core/Button';

import './Header.sass';

export class Header extends Component {
    render() {
        return (
            <div className="msg-header">
                <h1 className="msg-title">Болталка</h1>
                {this.props.location.pathname === '/profile/'
                    ?
                    <Link to="/" className="header-btn">
                      <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          startIcon={<TextsmsIcon/>}
                      >
                        Chats
                      </Button>
                    </Link>
                    :
                    <Link to="/profile/" className="header-btn">
                      <Button
                          variant="outlined"
                          color="primary"
                          size="small"
                          startIcon={<PersonIcon/>}
                      >
                        Profile
                      </Button>
                    </Link>
                }
            </div>
        );
    }
}