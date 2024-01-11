import React from 'react';
// import Increament from './increament';  
import Form from './form';

class Welcome extends React.Component {
  render() {
    return (
      <Form>
        <h1>Hello, {this.props.name}</h1>
        {/* Use the Increament component here */}
        {/* <Increament /> */}
        </Form>
    
    );
  }
}

export default Welcome;
