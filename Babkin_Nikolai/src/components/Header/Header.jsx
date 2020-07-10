import React from 'react';
import './Header.scss';
import {Link} from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

export class Header extends React.Component {
    render() {
        const {pageName, pathName} = this.props;
        return (
            <header className="header">
                <h2 className="header_h2">Messenger {pageName}</h2>
                {pathName &&
                <nav className="header_nav">
                    <ButtonGroup color="primary" aria-label="outlined button group">
                        {pathName.toLowerCase() === 'profile' ?
                            <Button id="header_nav_button">
                                <Link to="/chats/0">
                                    <ListItemText primary="Chats"/>
                                </Link>
                            </Button>
                            :
                            <Button id="header_nav_button">
                                <Link to="/profile">
                                    <ListItemText primary="Profile"/>
                                </Link>
                            </Button>
                        }
                    </ButtonGroup>
                </nav>
                }
            </header>
        );
    }
}