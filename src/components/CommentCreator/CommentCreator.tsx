import React, { ChangeEvent, Component } from "react";

interface CommentCreatorPropsType {
  value: string;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClick: (val: string) => void;
}

class CommentCreator extends Component<CommentCreatorPropsType> {
  render() {
    const { value, handleClick, handleOnChange } = this.props;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "350px",
          marginTop: "10px",
        }}
        data-testid="post-comment-creator"
      >
        <input
          size={32}
          placeholder="Введите комментарий"
          value={value}
          onChange={(e) => handleOnChange(e)}
        />
        <button onClick={() => handleClick(value)}>Отправить</button>
      </div>
    );
  }
}

export default CommentCreator;
