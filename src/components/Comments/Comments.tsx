import { Component, createRef, ReactNode } from 'react'
import { CommentPost } from '../Post/PostTypes'
import Comment from '../Comment/Comment'

interface CommentPropsType {
  comments: CommentPost[]
}

class Comments extends Component<CommentPropsType> {
  element: HTMLDivElement | unknown

  constructor(prop: CommentPropsType) {
    super(prop)
    this.element = createRef()
  }

  componentDidUpdate = () => {
    this.element instanceof HTMLDivElement &&
      this.element.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth',
        inline: 'end',
      })
  }

  shouldComponentUpdate = (nextProps: CommentPropsType): boolean => {
    return nextProps.comments !== this.props.comments ? true : false
  }

  render() {
    const { comments } = this.props

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '350px',
          maxHeight: '120px',
          overflow: 'auto',
          borderBottom: '1px solid #ddd',
          borderTop: '1px solid #ddd',
          paddingTop: '5px',
          marginBottom: '5px',
        }}
        data-testid="post-all-comments"
      >
        {comments.map(
          (comment: CommentPost, i): ReactNode => (
            <div
              key={comment.id}
              style={{ display: 'flex', flexDirection: 'column' }}
              ref={(elem) => (this.element = elem)}
            >
              <Comment
                key={comment.id}
                avatar={comment.avatar}
                username={comment.username}
                title={comment.title}
                id={comment.id}
              />
            </div>
          )
        )}
      </div>
    )
  }
}

export default Comments
