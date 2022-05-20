import Post from './Post'
import { render, cleanup } from '@testing-library/react'
import { Photo } from '../App/appTypes'
import userEvent from '@testing-library/user-event'

Element.prototype.scrollIntoView = jest.fn();

afterEach(cleanup)

describe('Post', () => {
  const photo: Photo = {
    id: 1,
    url: 'Some url',
  }
  it('check primary render Post ', () => {
    const { getByTestId, queryByTestId, getByText, queryByText } = render(
      <Post photo={photo} />
    )
    expect(getByTestId('post-user-avatar')).toBeInTheDocument()
    expect(getByTestId('post-username')).toBeInTheDocument()
    expect(getByTestId('post-image')).toBeInTheDocument()
    expect(queryByTestId('post-all-comments')).toBeNull()
    expect(getByTestId('post-slice-comments')).toBeInTheDocument()
    expect(getByText(/ещё/)).toBeInTheDocument()
    expect(queryByText(/свернуть.../)).toBeNull()
    expect(getByText(/Посмотреть все комментарии/)).toBeInTheDocument()
    expect(queryByText(/Скрыть все комментарии/)).toBeNull()
    expect(queryByTestId('post-comment-creator')).toBeNull()
  })

  it('switching to the full version of the comment and back', () => {
    const { getByText, queryByText, getByTestId } = render(
      <Post photo={photo} />
    )
    const showFullCommentButton = getByTestId('shows-comment')

    userEvent.click(showFullCommentButton)
    expect(getByText(/свернуть.../)).toBeInTheDocument()
    expect(queryByText(/ещё/)).toBeNull()

    userEvent.click(showFullCommentButton)
    expect(getByText(/ещё/)).toBeInTheDocument()
    expect(queryByText(/свернуть.../)).toBeNull()
  })

  it('show all comments and then hide', () => {
    const { getByText, queryByText, getByTestId, queryByTestId } = render(
      <Post photo={photo} />
    )
    const showAllCommentsButton = getByTestId('post-view-all-comments')

    userEvent.click(showAllCommentsButton)
    expect(queryByText(/Посмотреть все комментарии/)).not.toBeInTheDocument()
    expect(getByText(/Скрыть все комментарии/)).toBeInTheDocument()
    expect(getByTestId('post-all-comments')).toBeInTheDocument()
    expect(queryByTestId('post-slice-comments')).toBeNull()
    expect(getByTestId('post-comment-creator')).toBeInTheDocument()

    userEvent.click(showAllCommentsButton)
    expect(getByText(/Посмотреть все комментарии/)).toBeInTheDocument()
    expect(queryByText(/Скрыть все комментарии/)).toBeNull()
    expect(queryByTestId('post-all-comments')).toBeNull()
    expect(getByTestId('post-slice-comments')).toBeInTheDocument()
    expect(queryByTestId('post-comment-creator')).toBeNull()
  })

  it('check that the user has entered a comment in the input and published it on a button click', () => {
    const { getAllByTestId, getByRole, getByText, getByTestId } = render(
      <Post photo={photo} />
    )
    const showAllCommentsButton = getByTestId('post-view-all-comments')

    userEvent.click(showAllCommentsButton)
    const prevNubmberOfComments = getAllByTestId('comment').length
    const inputComment = getByRole('textbox')
    const sendCommentButton = getByRole('button')

    userEvent.type(inputComment, 'This is my comment')
    expect(inputComment).toHaveValue('This is my comment')

    userEvent.click(sendCommentButton)
    expect(getByText('This is my comment')).toBeInTheDocument()
    expect(getAllByTestId('comment')).toHaveLength(prevNubmberOfComments + 1)
  })
})
