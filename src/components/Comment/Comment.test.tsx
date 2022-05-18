import Comment from './Comment'
import { render } from '@testing-library/react'
import { CommentPost } from '../Post/PostTypes'

describe('Component', () => {
  it('test Comment is render', () => {
    const { id, avatar, username, title }: CommentPost = {
      id: 'Some id',
      avatar: 'Some url',
      username: 'Some username',
      title: 'Some title',
    }
    const { getByTestId } = render(
      <Comment
        key={id}
        avatar={avatar}
        username={username}
        title={title}
        id={id}
      />
    )
    const commentUsername = getByTestId('comment-username')
    const commentTitle = getByTestId('comment-title')
    expect(getByTestId('comment-user-avatar')).toBeInTheDocument()
    expect(commentUsername).toBeInTheDocument()
    expect(commentUsername).toHaveTextContent(/^Some username$/)
    expect(commentTitle).toBeInTheDocument()
    expect(commentTitle).toHaveTextContent(/^Some title$/)
  })
})
