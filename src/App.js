import React from 'react';
import Welcome from './Welcome';
import UserInfo from './Userinfo';
function App() {
  const user = { name: 'John Doe',age:"18" ,avatar:"https://cdn.pixabay.com/photo/2015/09/16/08/55/online-942408_960_720.jpg"};

  return (
    <div>
      <Welcome name={user.name} />
      <UserInfo user={user} />
    </div>
  );
}



export default App;
