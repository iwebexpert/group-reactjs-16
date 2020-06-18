import React from 'react';
import PropTypes from 'prop-types';

import './Preloader.css';

export function Preloader( props ) {
    const { show, children } = props;

    if ( !show ) {
        return null;
    }

    return (
        <div className="preloader">
            <div>{ children }</div>
            <div className="lds-spinner">
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
        </div>
    );
}

Preloader.propTypes = {
    show: PropTypes.bool.isRequired,
};