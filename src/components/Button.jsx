import React, { Component } from "react";

class Button extends Component{
  constructor(props){
    super(props);

    this.state = {
      color:"red"
    }
  }

  render(){
    return(
      <div>
        <h1>{this.props.colorBtn}</h1>
      </div>
    )
  }
}

export default Button;