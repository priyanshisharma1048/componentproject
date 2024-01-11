import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import Clock from './clock';
// import UserInfo from './Userinfo';
// import Toggle from './toggle';
// import Increament from './increament';
import Form from './form';
import Table from './table';

// const root = document.getElementById('root');
const root = ReactDOM.createRoot(document.getElementById('root'));
  
function tick() {
root.render(
        <React.StrictMode>
          {/* <h1>Normal text</h1> */}
          {/* <App /> */}
          {/* <Toggle/> */}
          <Form/>
          <Table/>
          
          {/* <Increament/> */}
          {/* <h1>Animated text</h1> */}
          {/* <Clock date={new Date()} text="priyanshi"/> */}
          {/* <UserInfo user={{name:"utkarsh",avatar:"https://cdn.pixabay.com/photo/2015/09/16/08/55/online-942408_960_720.jpg"}}/>; */}
        </React.StrictMode>
      );

  }

  setInterval(tick, 1000);
