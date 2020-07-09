import React from 'react';
import './Profile.scss';
import {Header} from "components/Header";
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TagFacesIcon from '@material-ui/icons/TagFaces';

export class Profile extends React.Component {
    render() {
        const {data} = this.props;

        return (
            <div className="profile">
                <Header pageName="Profile" pathName="profile"/>
                <Chip className="profile_element" label={data.name} icon={<FaceIcon/>}/>
                <Chip className="profile_element" label={data.email} icon={<MailOutlineIcon/>}/>
                <Chip className="profile_element" label={data.phone} icon={<PhoneAndroidIcon/>}/>
                <Chip className="profile_element" label="interests" icon={<TagFacesIcon/>}/>
                <div className="profile_interests-block">
                    {data.interests && data.interests.map((interest, index) => {
                        return <Chip className="profile_interests-block_element" key={index} label={interest}/>
                    })}
                </div>
            </div>
        )
    }
}