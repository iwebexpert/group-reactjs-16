import React, {Fragment} from 'react';

export class Identification extends React.Component {
    state = {
        authorName: ''
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
    }

    animationLogIn() {
        const messenger = document.querySelector('.messenger');
        messenger.animate([
            {opacity: 0},
            {opacity: 1},
        ], {
            duration: 1000,
            fill: "forwards",
        })

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
        const messenger = document.querySelector('.messenger');
        messenger.animate([
            {opacity: 1},
            {opacity: 0},
        ], {
            duration: 200,
            fill: "forwards",
        })

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
                        Log Out <br/> <b>{sessionStorage.getItem('name')}</b>
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