import React, {Fragment} from 'react';
import './Profile.scss';

export class Profile extends React.Component {

    componentDidMount() {
        this.props.getPageName('Profile');

        if (this.props.isLogin) {
            document.querySelector('.profile').style.opacity = '1';
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.isLogin !== prevProps.isLogin) {
            if (this.props.isLogin) this.props.animationLogIn('.profile')
            else this.props.animationLogOut('.profile')
        }
    }



    render() {
        return (
            <div className="profile">
                <h3>Profile Page</h3>
                <p>Your name: {sessionStorage.getItem('name')}</p>
            </div>
        )
    }
}