import PostHeader from './PostHeader'
import { render, cleanup } from '@testing-library/react'
import { User } from '../Post/PostTypes'

afterEach(cleanup)

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
