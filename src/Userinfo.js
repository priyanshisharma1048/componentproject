import Avatar from "./Avatar";

function UserInfo(props) {
  
    return (
      <div className="UserInfo">
        <Avatar avatar={props.user.avatar} />
        <div className="UserInfo-name">{props.user.name}</div>
      </div>
    );
  }
  export default UserInfo;