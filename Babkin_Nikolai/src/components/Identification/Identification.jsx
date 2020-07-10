import React, {Fragment} from 'react';
import './Identification.scss'
import Avatar from "@material-ui/core/Avatar";

export class Identification extends React.Component {
    state = {
        authorName: ''
    }

    defaultAuthorName = 'Guest'

    componentDidMount() {
        const identifier = document.querySelector('.identification');
        identifier.firstChild.focus();
    }

    logIn = (event) => {
        event.preventDefault()
        const {authorName} = this.state
        if (authorName) {
            sessionStorage.setItem('name', authorName);
            this.setState({authorName: authorName});
            this.props.profileSet(authorName)
        }
    }

    logOut = (event) => {
        event.preventDefault()
        sessionStorage.removeItem('name');
        this.setState({authorName: ''});
        this.props.profileSet(this.defaultAuthorName)
        setTimeout(() => document.querySelector('.identification').firstChild.focus(), 1000)
    }

    inputChange = (event) => {
        this.setState({authorName: event.target.value})
    }

    render() {
        let formLogin;
        if (sessionStorage.getItem('name')) {
            formLogin = (
                <Fragment>
                    <button className="identification_button-logout" onClick={this.logOut}>
                        <span>LogOut</span>
                        <Avatar>{sessionStorage.getItem('name').substr(0, 2).toUpperCase()}</Avatar>
                    </button>
                </Fragment>
            )
        } else {
            formLogin = (
                <Fragment>
                    <input className="identification_input" type="text" name="authorName" onChange={this.inputChange}
                           placeholder="You Name"/>
                    <button className="identification_button-login" onClick={this.logIn}>Log In</button>
                </Fragment>
            )
        }
        return (
            <form className="identification">
                {formLogin}
            </form>
        )
    }
}