import { render } from "@testing-library/react";
import React from "react";

class Toggle extends React.Component{
    constructor(){
        super();
        this.state={isToggleOn:true};
        this.handleClick = this.handleClick.bind(this);

    }
handleClick(){
    this.setState(prevstate=>({
        isToggleOn:!prevstate.isToggleOn
    }));
}


render(){
    
        return (
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
          </button>
        );
      }
    }
export default Toggle;
