import React, {Fragment} from 'react';
import './Identification.scss'
import Avatar from "@material-ui/core/Avatar";

export class Identification extends React.Component {
    state = {
        authorName: ''
    }

    componentDidMount() {
        const identifier = document.querySelector('.identification');
        if (sessionStorage.getItem('name')) {
            identifier.style.top = '2%';
            identifier.style.right = '2%';
        }
        identifier.firstChild.focus();
    }

    logIn = (event) => {
        event.preventDefault()
        if (this.state.authorName) {
            sessionStorage.setItem('name', this.state.authorName);
            this.setState({authorName: this.state.authorName});
            this.animationLogIn();
        }
    }

    logOut = (event) => {
        event.preventDefault()
        sessionStorage.removeItem('name');
        this.setState({authorName: ''});
        this.animationLogOut();
        setTimeout(() => document.querySelector('.identification').firstChild.focus(), 1000)
    }

    animationLogIn() {
        this.props.handlerLogin(true)

        const identifier = document.querySelector('.identification');
        identifier.animate([
            {
                top: '40%',
                right: this.getWidthIndent() + 'px'
            },
            {
                top: '2%',
                right: '2%'
            },
        ], {
            duration: 200,
            fill: "forwards",
        })
    }

    animationLogOut() {
        this.props.handlerLogin(false)

        const identifier = document.querySelector('.identification');
        identifier.animate([
            {
                top: '2%',
                right: '2%'
            },
            {
                top: '40%',
                right: this.getWidthIndent() + 'px'
            },
        ], {
            duration: 200,
            fill: "forwards",
        })
    }

    getWidthIndent() {
        const rootElementWidth = document.getElementById('root').clientWidth;
        return (rootElementWidth - 400) / 2;
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