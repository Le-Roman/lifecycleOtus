import { Component } from 'react'
import { CommentPost } from '../Post/PostTypes'

class Comment extends Component<CommentPost> {
  shouldComponentUpdate = (nextProps: CommentPost): boolean => {
    if (nextProps !== this.props) {
      return true
    }
    return false
  }
  render() {
    const { avatar, username, title } = this.props

    return (
      <div style={{ marginBottom: '5px' }} data-testid="comment">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={avatar}
            style={{
              width: '25px',
              height: '25px',
              borderRadius: '50%',
              marginRight: '5px',
            }}
            alt="Аватар пользователя"
            data-testid="comment-user-avatar"
          />
          <div
            style={{ fontWeight: 'bold', fontSize: '14px' }}
            data-testid="comment-username"
          >
            {username}
          </div>
        </div>
        <div
          style={{
            marginLeft: '30px',
            fontSize: '12px',
            textAlign: 'justify',
            padding: '0px 10px',
          }}
          data-testid="comment-title"
        >
          {title}
        </div>
      </div>
    )
  }
}

export default Comment
