"use strict";

import React from 'react';

import Footer from './Footer';


export default class Page extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: ''
        }
    }

    componentDidMount(){
       this.setState({
           title: document.title
       });
    }

    render() {
        return (
            <section>
                {this.props.children}
                <Footer />
            </section>
        );
    }
}