"use strict";

import React from 'react';

import AboutPage from "../components/AboutPage";

export class AboutPageView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: []
        };
    }

    componentWillMount(){

    }

    render() {
        return (
            <AboutPage />
        );
    }
}
