"use strict";

import { withRouter } from 'react-router-dom';
import React from 'react';

import Page from './Page';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(event) {
        event.preventDefault();

        this.props.handleSearch();
    }

    render() {
        return (
            <Page>
                <div class="w-100 p-3 ml-5">
                    <div className="p-xl-3" style={{width: "90%", alignItems: "center", margin: "auto"}}>
                    </div>
                </div>
            </Page>
        );
    }
}
export default withRouter(LandingPage);
