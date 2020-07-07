import React, {Fragment} from 'react';
import {Identification} from "components/Identification";
import './Layout.scss';
import {ProfileRedux} from "containers/ProfileContainer";

export class Layout extends React.Component {
    state = {
        // isLogin: !!sessionStorage.getItem('name'),
        isLogin: true,
    }

    handlerLogin = (isLogin) => {
        this.setState({isLogin: isLogin})
    }

    render() {
        return (
            <Fragment>
                {/*<Identification handlerLogin={this.handlerLogin}/>*/}
                <ProfileRedux
                    isLogin={this.state.isLogin}/>
            </Fragment>
        )
    }
}