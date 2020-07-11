import React, { Component } from 'react';


export default class Footer extends Component{
    state ={
        clicked: false
    }
    
    render(){
        return <button onClick={this.state.clicked}>Continue</button>
    }
}