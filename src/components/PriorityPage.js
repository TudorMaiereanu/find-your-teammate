"use strict";

import { withRouter } from 'react-router-dom';
import React from 'react';

import Page from './Page';
import styled from "styled-components";


class PriorityPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        };

        this.handleChangeCoronaPriority = this.handleChangeCoronaPriority.bind(this);
    }

    handleChangeCoronaPriority(event) {
        this.setState({coronaPriority: event.target.value});
    };

    render() {
        return (
            <Page>
                <div className="w-100 p-3 mb-5" style={{position: "absolute", minHeight: "100%"}}>
                    <p className="h2 text-center" style={{paddingTop: "50px"}}>It's a match</p>
                    <p className="h1 text-center text-success" style={{paddingTop: "50px"}}>Leon Schulz</p>
                </div>
            </Page>
        );
    }
}

export default withRouter(PriorityPage);
