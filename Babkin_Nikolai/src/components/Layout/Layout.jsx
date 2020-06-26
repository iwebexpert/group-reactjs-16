import React, {Fragment} from 'react';
import {Identification} from "components/Identification";
import {Messenger} from "components/Messenger";
import {Header} from "components/Header";
import {Profile} from "components/Profile";
import './Layout.scss';


export class Layout extends React.Component {
    state = {
        pageName: '',
        isLogin: !!sessionStorage.getItem('name'),
    }

    animationLogIn(classElem) {
        const messenger = document.querySelector(classElem);
        messenger.animate([
            {opacity: 0},
            {opacity: 1},
        ], {
            duration: 1000,
            fill: "forwards",
        })
    }

    animationLogOut(classElem) {
        const messenger = document.querySelector(classElem);
        messenger.animate([
            {opacity: 1},
            {opacity: 0},
        ], {
            duration: 200,
            fill: "forwards",
        })
    }

    getPageName = (name) => {
        this.setState({pageName: name})
    }

    handlerLogin = (isLogin) => {
        this.setState({isLogin: isLogin})
    }

    render() {
        const urlPath = this.props.match.path.split('/')[1];

        return (
            <Fragment>
                <Identification handlerLogin={this.handlerLogin}/>
                <Header pageName={this.state.pageName} isLogin={this.state.isLogin}/>
                {
                    urlPath === 'profile' &&
                    <Profile
                        getPageName={this.getPageName}
                        isLogin={this.state.isLogin}
                        animationLogIn={this.animationLogIn}
                        animationLogOut={this.animationLogOut}/>
                }
                {
                    urlPath === 'chats' &&
                    <Messenger
                        getChats={this.getChats}
                        getPageName={this.getPageName}
                        chatId={this.props.match.params.id}
                        isLogin={this.state.isLogin}
                        animationLogIn={this.animationLogIn}
                        animationLogOut={this.animationLogOut}/>
                }

            </Fragment>
        )
    }
}