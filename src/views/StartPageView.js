"use strict";

import React from 'react';

import StartPage from '../components/StartPage'


export class StartPageView extends React.Component {

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

        // MovieService.getMovies().then((data) => {
        //     this.setState({
        //         data: [...data],
        //         loading: false
        //     });
        // }).catch((e) => {
        //     console.error(e);
        // });
    }

    render() {
        return (
            <StartPage/>
        );
    }
}
