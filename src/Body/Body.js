import React, { Component } from 'react';
import './Body.css';
import Paragraph from '../Components/Paragraph/Paragraph';

export default class Body extends Component{
    state={
        name:""
    }
    
    render(){
    return (
    <div className="main">
        <div>
            <h2>image</h2>
        </div>
        <div className={this.state.name==='abc'?'main green':['the shining','pqr','xyz'].includes(this.state.name)?'main red':'main'}>
            {this.props.name.map((text)=>{
                return <Paragraph name={text} onclick={()=>this.setState({name:text})}/>
            })}
        </div>

    </div>
    );
        }
  }
  
  
  