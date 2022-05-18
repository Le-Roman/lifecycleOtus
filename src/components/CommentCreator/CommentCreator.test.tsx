import CommentCreator from './CommentCreator'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('CommentCreator', () => {
  it('test CommentCreator is render', () => {
    const value: string = ''
    const comment: string = 'This is my comment'
    const handleOnChange = jest.fn()
    const handleClick = jest.fn()

    const { getByRole } = render(
      <CommentCreator
        value={value}
        handleClick={handleClick}
        handleOnChange={handleOnChange}
      />
    )
    const inputComment = getByRole('textbox')
    const sendCommentButton = getByRole('button')
    expect(inputComment).toHaveAttribute('placeholder', 'Введите комментарий')
    expect(inputComment).toHaveAttribute('value', value)

    userEvent.type(inputComment, comment)
    expect(handleOnChange).toHaveBeenCalledTimes(comment.length)

    userEvent.click(sendCommentButton)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
