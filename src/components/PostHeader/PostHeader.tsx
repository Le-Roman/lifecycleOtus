import React, { Component } from "react";
import { User } from "../Post/PostTypes";

class PostHeader extends Component<User> {
  render() {
    const { avatar, username } = this.props;
    return (
      <div style={{ display: "flex", width: "350px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "10px",
          }}
        >
          <img
            src={avatar}
            alt="Аватар пользователя"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            data-testid="post-user-avatar"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3 data-testid="post-username">{username}</h3>
        </div>
      </div>
    );
  }
}

export default PostHeader;
