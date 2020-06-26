import React from 'react';
import './Header.scss';
import {Link} from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

export class Header extends React.Component {
    state = {
        pageName: '',
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!this.props.isLogin && this.state.pageName !== '') {
            this.setState({pageName: ''})
        } else if (this.props.pageName !== prevState.pageName) {
            this.setState({pageName: this.props.pageName});
        }
    }

    render() {
        return (
            <header className="header">
                <h2 className="header_h2">Messenger {this.state.pageName}</h2>
                {this.state.pageName &&
                <nav className="header_nav">
                    <ButtonGroup color="primary" aria-label="outlined button group">
                        {this.props.pageName.toLowerCase() === 'profile' ?
                            <Button>
                                <Link to="/chats/1">
                                    <ListItemText primary="Chats"/>
                                </Link>
                            </Button>
                            :
                            <Button>
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