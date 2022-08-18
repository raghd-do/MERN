import React, { Component } from 'react';
import Style from './CSS/style.module.css';

class Main extends Component {
    render() {
        return(
            <div className={Style.main}>{ this.props.children }</div>
        );
    }
}

export default Main;