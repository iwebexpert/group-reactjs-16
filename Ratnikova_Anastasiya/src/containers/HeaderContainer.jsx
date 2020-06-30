import React from 'react';
import {connect} from 'react-redux';

import {Header} from "components/Header";

function mapStateToProps(state){
    const {name} = state.profile.entries;

    return {
        name: name
    }
}

export default connect(mapStateToProps)(Header);