import PostHeader from './PostHeader'
import { render } from '@testing-library/react'
import { User } from '../Post/PostTypes'

describe('PostHeader', () => {
  it('test PostHeader is render', () => {
    const { avatar, username }: User = {
      avatar: 'Some url',
      username: 'Some username',
    }
    const { getByTestId } = render(
      <PostHeader avatar={avatar} username={username} />
    )
    expect(getByTestId('post-user-avatar')).toBeInTheDocument()
    expect(getByTestId('post-username')).toBeInTheDocument()
  })
})
