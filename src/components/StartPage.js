"use strict";

import { withRouter } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import MultiSelect from "react-multi-select-component";
import Page from './Page';
import qualityDictionary from "./constants/qualities.json";

const SearchBox = () => {
    const options = Object.keys(qualityDictionary).map(item => {
        return {
            "label": item,
            "value": item,
        }
    });
   
    const [selected, setSelected] = useState([]);

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

class StartPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            node: null,
        };

        // this.handleClick = this.handleClick.bind(this);
        // this.handlClickOutside = this.handlClickOutside.bind(this);
    }

    componentDidMount(){
        console.log(qualityDictionary);
    }


    render() {
        return (
            <Page>
                <div className="w-100 p-3 mb-5" style={{position: "absolute", minHeight: "100%"}}>
                    <p className="h1 text-center" style={{paddingTop: "100px", paddingBottom: "50px"}}>What do you value in a teammate?</p>
                    <div className="container">
                        <SearchBox />
                    </div>
                    <div className="text-center mt-5">
                        <a href={"#match"} className="text-white">
                            <button type="submit" className="btn btn-primary" style={{borderRadius: "20px"}}>
                                    <p className="h4 p-2 my-auto">Find a match</p>
                            </button>
                        </a>
                    </div>
                </div>
            </Page>
        );
    }
}

export default withRouter(StartPage);
