"use strict";

import { withRouter } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import MultiSelect from "react-multi-select-component";
import Page from './Page';
import qualityDictionary from "./constants/qualities.json";
import { css } from "@emotion/core";
import GridLoader from "react-spinners/GridLoader";
import HashLoader from "react-spinners/HashLoader";

const override = css`
  display: block;
  margin: 0 auto;
`;

let globalSelectedList;

const SearchBox = () => {
    const options = Object.keys(qualityDictionary).map(item => {
        return {
            "label": item,
            "value": item,
        }
    });
   
    const [selected, setSelected] = useState([]);
    globalSelectedList = selected;

    selected.sort(function(a, b) {
        if(a.label.toLowerCase() < b.label.toLowerCase()) return -1;
        if(a.label.toLowerCase() > b.label.toLowerCase()) return 1;
        return 0;
    })
   
    return (
        <div>
            <div className="row justify-content-center border" style={{maxHeight: "400px", overflowY: "auto"}}>
                {selected.map(item =>
                <a href="#">
                    <div class="card m-4" style={{width: "170px", height:"100px"}}>
                        <h3 class="m-auto">{item.label}</h3>
                    </div>
                </a>
                )}
            </div>
            <div className="mt-3">
                <MultiSelect
                    options={options}
                    value={selected}
                    onChange={setSelected}
                    labelledBy={"Select"}
                    overrideStrings={{
                        "selectSomeItems": "Search for quality",
                        "allItemsAreSelected": "All qualities are selected.",
                        "selectAll": "I want all of them!",
                        "search": "Search for what you're looking for"
                    }}
                />
            </div>
      </div>
    );
};

class Delayed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hidden : true};
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({hidden: false});
        }, this.props.waitBeforeShow);
    }

    render() {
        return this.state.hidden ? '' : this.props.children;
    }
}


class StartPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            node: null,
            isMatch: false,
            startLoadingQualities: false,
            startLoadingTeammate: false,
        };

        this.onFindMatchClick = this.onFindMatchClick.bind(this);
        this.onRestartClick = this.onRestartClick.bind(this);
        this.loadQualities = this.loadQualities.bind(this);
        this.loadTeammate = this.loadTeammate.bind(this);
    }

    onFindMatchClick() {
        this.setState({
            isMatch: !this.state.isMatch,
        })
        this.loadQualities();
    }

    loadQualities() {
        this.setState({
            startLoadingQualities: true,
        });
        setTimeout(() => {
            this.setState({startLoadingQualities: false})
            this.loadTeammate();
        } 
        , 2000);
    }

    loadTeammate() {
        this.setState({
            startLoadingTeammate: true,
        })
        setTimeout(() => this.setState({startLoadingTeammate: false}), 2000);
    }

    onRestartClick() {
        this.setState({
            isMatch: !this.state.isMatch,
        })
    }

    render() {
        return (
            <Page>
                <div className="w-100 p-3 mb-5" style={{position: "absolute", minHeight: "100%"}}>
                    {this.state.isMatch === false
                        ?
                            <div>
                                <p className="h2 text-center" style={{paddingTop: "100px", paddingBottom: "50px"}}>What do you value in a teammate?</p>
                                <div className="container">
                                    <SearchBox />
                                    <div className="text-center mt-5">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                                style={{borderRadius: "20px"}}
                                                onClick={this.onFindMatchClick}
                                            >
                                                    <p className="h4 p-2 my-auto">Find a match</p>
                                            </button>
                                    </div>
                                </div>
                            </div>
                        :
                            <div>
                                {this.state.startLoadingQualities
                                    ?
                                        <div className="text-center" style={{paddingTop: "100px"}}>
                                            <p className="h2 mb-5">Searching for the qualities selected...</p>
                                            <GridLoader
                                                css={override}
                                                size={40}
                                                color={"#123abc"}
                                                loading={true}
                                            />
                                        </div>
                                    :
                                        null
                                }
                                {this.state.startLoadingTeammate
                                    ?
                                        <div className="text-center" style={{paddingTop: "100px"}}>
                                            <p className="h2 mb-5">Searching for the ideal teammate...</p>
                                            <HashLoader
                                                css={override}
                                                size={80}
                                                color={"#123abc"}
                                                loading={true}
                                            />
                                        </div>
                                    :
                                        null
                                }
                                <Delayed waitBeforeShow={4000}>
                                    <p className="h2 text-center" style={{paddingTop: "100px"}}>
                                        It's a match
                                    </p>
                                    <div className="text-center" style={{paddingBottom: "50px"}}>
                                        <button className="btn btn-secondary mb-5" style={{backgroundColor:"grey"}} onClick={this.onRestartClick}>
                                            <i class="fas fa-redo-alt"></i>
                                        </button>
                                        <p className="h1 text-success mb-4">Leon Schulz</p>
                                        <img
                                            className="text-center"
                                            src="https://media-exp1.licdn.com/dms/image/C4D03AQGnBKoKlYTDnA/profile-displayphoto-shrink_800_800/0?e=1600300800&v=beta&t=LGqy545XrQcX1fV2Q-AAmfpu4dXkdWS_31B0VoZEyM8"
                                            style={{width: "300px", borderRadius: "150px"}}
                                        />
                                        <div className="col mt-5" style={{maxHeight:"300px", overflowY:"scroll"}}>
                                            {globalSelectedList.map((item) =>
                                                <div className="row justify-content-center">
                                                    <i class="fas fa-check"></i>
                                                    <p className="h5">
                                                        {qualityDictionary[item.label]}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                        <button
                                            type="submit"
                                            className="btn btn-primary mt-5"
                                            style={{borderRadius: "20px"}}
                                            onClick={() => {location.href = 'https://www.linkedin.com/in/leon-schulz/'}}
                                        >
                                            <p className="h4 p-2 my-auto">Check out my LinkedIn profile</p>
                                        </button>
                                    </div>
                                </Delayed>
                            </div>
                    }
                </div>
            </Page>
        );
    }
}

export default withRouter(StartPage);
