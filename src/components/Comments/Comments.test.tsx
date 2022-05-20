import Comments from './Comments'
import { render, cleanup } from '@testing-library/react'
import { CommentPost } from '../Post/PostTypes'

const commentsOne: CommentPost[] = [
  {
    id: 'Some id one',
    avatar: 'Some url one',
    username: 'Some username one',
    title: 'Some title one',
  },
]

const commentsTwo: CommentPost[] = [
  {
    id: 'Some id one',
    avatar: 'Some url one',
    username: 'Some username one',
    title: 'Some title one',
  },
  {
    id: 'Some id two',
    avatar: 'Some url two',
    username: 'Some username two',
    title: 'Some title two',
  },
]

Element.prototype.scrollIntoView = jest.fn()

afterEach(cleanup)

describe('Comments', () => {
  it('test Comment to render correctly when props change', () => {
    const { rerender, getAllByTestId } = render(
      <Comments comments={commentsOne} />
    )
    expect(getAllByTestId('comment')).toHaveLength(commentsOne.length)
    rerender(<Comments comments={commentsTwo} />)
    expect(getAllByTestId('comment')).toHaveLength(commentsTwo.length)
  })
})
