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
                        "selectSomeItems": "Search character trait",
                        "allItemsAreSelected": "All character traits selected.",
                        "selectAll": "I want all of them.",
                        "search": "Enter character trait"
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
                            <p className="h1 text-center" style={{ color: "#0C3A3C", paddingTop: "100px", paddingBottom: "40px" }}>Get Your Business Developer </p>
                            <p className="h2 text-center" style={{ color: "#335D57", paddingTop: "0px", paddingBottom: "50px" }}>Select qualities of your ideal teammate. </p>
                                <div className="container">
                                    <SearchBox />
                                    <div className="text-center mt-5">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                                style={{borderRadius: "20px"}}
                                                onClick={this.onFindMatchClick}
                                            >
                                                    <p className="h4 p-2 my-auto">FIND MATCH</p>
                                            </button>
                                    </div>
                                </div>
                            </div>
                        :
                            <div>
                                {this.state.startLoadingQualities
                                    ?
                                        <div className="text-center" style={{paddingTop: "100px"}}>
                                            <p className="h2 mb-5">Matching character traits...</p>
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
                                            <p className="h2 mb-5">Searching ideal teammate...</p>
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
                                <p className="h2 text-center" style={{ fontStyle: "italic", color: "#0C3A3C", paddingTop: "100px", paddingBottom: "20px"}}>It's a Match!</p>
                                <p className="h1 text-center" style={{ color: "#335D57", paddingBottom: "20px" }}>Leon Schulz </p>
                                <div className="text-center" style={{ paddingBottom: "50px"}}>
                                        <img
                                            className="text-center"
                                            src="https://media-exp1.licdn.com/dms/image/C4D03AQGnBKoKlYTDnA/profile-displayphoto-shrink_800_800/0?e=1600300800&v=beta&t=LGqy545XrQcX1fV2Q-AAmfpu4dXkdWS_31B0VoZEyM8"
                                            style={{width: "300px", borderRadius: "150px"}}
                                        />
                                    <p className="text-black" style={{ fontWeight: "bold", fontSize: 18, paddingTop: "30px", paddingBottom: "10px"}}>EXPERIENCE</p>
                                    <p className="text-black" style={{ color: "black", fontSize: 18 }}>Evaluating investment opportunities for a deep tech VC has trained me in analyzing markets. <br /> <br /> Building B2B ventures for Europe's leading, independent company builder has taught me to understand customer needs. <br /><br /> Managing fundraising for a social project at Engineers Without Borders has schooled me in controlling finances. <br /><br /> With my programming skills (Python, Java, Matlab, R) I will support the Tech Developer. <br /><br /> With my hands-on experience in Design Thinking I will support the Problem Expert.</p>
                                        <div className="container border bg-white p-3 mt-5" style={{width: "500px"}}>
                                            <div className="col" style={{maxHeight:"300px", overflowY:"scroll"}}>
                                                {globalSelectedList.map((item) =>
                                                    <div className="row justify-content-center">
                                                        <p className="h5 text-left py-2" style={{width:"400px"}}>
                                                            {qualityDictionary[item.label]}
                                                        </p>
                                                        <i class="fas fa-check my-auto" style={{color: "green"}}></i>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div>
                                            <button
                                                type="submit"
                                                className="btn btn-primary mt-5"
                                                style={{borderRadius: "20px"}}
                                                onClick={() => {location.href = 'https://www.linkedin.com/in/leon-schulz/'}}
                                            >
                                                <p className="h4 p-2 my-auto">EXPLORE LINKEDIN</p>
                                            </button>
                                        </div>
                                        <div>
                                            <button 
                                                className="btn btn-primary mt-3 bg-dark border-0"
                                                style={{borderRadius: "20px"}}
                                                onClick={this.onRestartClick}
                                            >
                                                Search again <i class="fas fa-redo-alt"></i>
                                            </button>
                                        </div>
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
