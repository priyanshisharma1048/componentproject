import React from "react";

class Increament extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      active:'false'

    };
    this.increment=this.increment.bind(this)
  }

  increment ()  {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
activateLasers=()=>{
  this.setState({active:(this.state.active==='true') ?'false':'true'})

  
  }
   

  render() {
    return (
      <div>
        <p>count {this.state.count} times</p>
        <p>active {this.state.active}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.activateLasers}>
  Activate Lasers
</button>


      </div>
    );
  }
}

export default Increament;
