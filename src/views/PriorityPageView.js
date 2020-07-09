"use strict";

import React from 'react';

import PriorityPage from '../components/PriorityPage'


export class PriorityPageView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: []
        };
    }

    componentWillMount(){
        this.setState({
            loading: true
        });
    }

    componentDidMount(){
        this.setState({
            loading: false
        });
    }

    render() {
        return (
            <PriorityPage />
        );
    }
}
