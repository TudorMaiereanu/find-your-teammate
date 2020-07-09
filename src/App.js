"use strict";

import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { StartPageView } from './views/StartPageView';
import { AboutPageView } from "./views/AboutPageView";
import { PriorityPageView } from "./views/PriorityPageView";


export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'Find your teammate',
            routes: [
                { component: AboutPageView , path: '/about'},
                { component: StartPageView , path: '/', exact: true},
                { component: PriorityPageView, path: '/match'},
            ]
        };
    }

    componentDidMount(){
        document.title = this.state.title;
    }

    render() {
        return(
            <div>
                <Router>
                    <Switch>
                        {this.state.routes.map((route, i) => (<Route key={i} {...route}/>) )}
                    </Switch>
                </Router>
            </div>
        );
    }
}

