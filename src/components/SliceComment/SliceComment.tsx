import React, { Component } from "react";
import { CommentPost } from "../Post/PostTypes";

export interface SliceCommentPropsType {
  comment: CommentPost;
  isView: boolean;
  handleClick: () => void;
}

class SliceComment extends Component<SliceCommentPropsType> {
  render() {
    const { id, username, title } = this.props.comment;
    const { isView, handleClick } = this.props;
    const modifyTitle = isView ? title : title.slice(0, 15) + "...";
    return (
      <div
        key={id}
        style={{ marginBottom: "5px", width: "350px" }}
        data-testid="post-slice-comments"
      >
        <span style={{ fontWeight: "bold", fontSize: "14px" }}>{username}</span>
        <span
          style={{
            marginLeft: "5px",
            fontSize: "12px",
          }}
          data-testid="slice-comment"
        >
          {modifyTitle}
        </span>
        <span
          style={{
            marginLeft: "10px",
            fontSize: "12px",
            cursor: "pointer",
          }}
          onClick={() => handleClick()}
          data-testid="shows-comment"
        >
          {isView ? "свернуть..." : "ещё"}
        </span>
      </div>
    );
  }
}

export default SliceComment;
