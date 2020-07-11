import React, { Component } from 'react';
import './Paragraph.css';


// const paragraph = (props)=>{
//     return(
//         <p>{props.name}</p>
//     )
// }
// export default paragraph;

export default class Paragraph extends Component{
   state={
       clicked:false
   }
   
    render() {
        return <p className={this.state.clicked?'options red':'options'} onClick={this.props.onclick}>{this.props.name}</p>;
      }
}