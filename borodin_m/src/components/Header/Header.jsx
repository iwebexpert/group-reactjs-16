import React, {Component} from 'react';

import './Header.sass';

export class Header extends Component {
  render() {
    return (
      <div className="msg-header">
        <h1 className="msg-title">Болталка</h1>
      </div>
    );
  }
}