import React from 'react';

export default function Test() {
  function Avatar(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  function TestUserInfo(props) {
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">{props.user.name}</div>
      </div>
    );
  }

  return <TestUserInfo user={{ name: 'Test User' }} />;
}

