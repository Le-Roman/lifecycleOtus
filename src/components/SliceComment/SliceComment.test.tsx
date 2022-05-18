import SliceComment from './SliceComment'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('SliceComment', () => {
  it('test of how the component works when the user clicks on "more" and then on "minimize...', () => {
    const comment = {
      id: 'Some id',
      title:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, nesciunt?',
      avatar: 'Some avatar',
      username: 'Some username',
    }
    let isView = false
    const handleClick = jest.fn(() => (isView = !isView))

    const { rerender, getByTestId } = render(
      <SliceComment
        comment={comment}
        handleClick={handleClick}
        isView={isView}
      />
    )

    const myRerender = () => {
      rerender(
        <SliceComment
          comment={comment}
          handleClick={handleClick}
          isView={isView}
        />
      )
    }
    expect(getByTestId('slice-comment').innerHTML).toHaveLength(18)

    userEvent.click(getByTestId('shows-comment'))
    myRerender()
    expect(getByTestId('slice-comment').innerHTML).toHaveLength(
      comment.title.length
    )

    userEvent.click(getByTestId('shows-comment'))
    myRerender()
    expect(getByTestId('slice-comment').innerHTML).toHaveLength(18)
  })
})
