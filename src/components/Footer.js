"use strict";

import React from 'react';
import { withRouter } from 'react-router-dom';


class PlainFooter extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="footer text-center w-100 bg-dark" style={{bottom:0, position:"fixed"}}>
                <span class="text-white" style={{margin: 10}}> © {new Date().getFullYear()} Find your teammate All rights reserved</span>
                <a href="#about">
                    <span className="text-white" style={{margin: 10}}>About</span>
                </a>
            </div>
        );
    }
}

export default withRouter(PlainFooter);
