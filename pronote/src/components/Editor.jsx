import React, { Component } from 'react';
import './editor.css';

export default class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: ''
        };
        this.handleChange = this.handleChange.bind(this); 
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <div id='container'>
                <div className="input">
                    <h3>Input</h3>
                    <textarea className="input-text" onChange={(e) => this.handleChange(e)} value={this.state.value}/>
                </div>
                <div className="output">
                    <h3>Pro Note</h3>
                    <div className="output-text">{this.state.value}</div>
                </div> 
            </div>
        );
    }
}
