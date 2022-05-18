import { ChangeEvent, Component, ReactNode } from 'react'
import { PostProps, PostState, User } from './PostTypes'
import faker from '@faker-js/faker/locale/ru'
import PostHeader from '../PostHeader/PostHeader'
import Comments from '../Comments/Comments'
import SliceComment from '../SliceComment/SliceComment'
import CommentCreator from '../CommentCreator/CommentCreator'

const initialUser: User = {
  avatar: faker.image.avatar(),
  username: 'I_am',
}

class Post extends Component<PostProps, PostState> {
  constructor(props: PostProps) {
    super(props)
    this.state = {
      mode: {
        isViewAllComments: false,
        isViewFullComment: false,
      },
      user: initialUser,
      userPost: {
        avatar: faker.image.avatar(),
        username: faker.internet.userName(),
      },
      comments: [
        {
          id: faker.datatype.uuid(),
          title: faker.hacker.phrase(),
          avatar: faker.image.avatar(),
          username: faker.internet.userName(),
        },
        {
          id: faker.datatype.uuid(),
          title: faker.hacker.phrase(),
          avatar: faker.image.avatar(),
          username: faker.internet.userName(),
        },
      ],
      inputValue: '',
      message: '',
    }
  }
  componentDidUpdate = (_: PostProps, prevSate: PostState) => {
    if (prevSate.comments !== this.state.comments) {
      this.setState({ message: 'Новый комментарий!' })
      setTimeout(() => {
        this.setState({ message: '' })
      }, 1000)
    }
  }

  handlerMoreClick = (): void => {
    const isView = this.state.mode.isViewFullComment
    const modeInState = this.state.mode
    const updateMode = { ...modeInState, isViewFullComment: !isView }
    this.setState({ mode: updateMode })
  }

  handleAllCommentsClick = (): void => {
    const isView = this.state.mode.isViewAllComments
    const modeInState = this.state.mode
    const updateMode = {
      ...modeInState,
      isViewFullComment: false,
      isViewAllComments: !isView,
    }
    this.setState({ mode: updateMode })
  }

  handleInputOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ inputValue: e.target.value })
  }

  handleSendClick = (title: string): void => {
    if (title) {
      const { avatar, username } = this.state.user
      const newComment = { id: faker.datatype.uuid(), avatar, username, title }
      const updateComments = [...this.state.comments, newComment]
      this.setState({ comments: updateComments, inputValue: '' })
    }
  }

  render(): ReactNode {
    const { photo } = this.props
    const { mode, userPost, comments, inputValue, message } = this.state
    const [firstComment] = comments

    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '5px 0px',
        }}
        data-testid="post"
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '360px',
            border: '1px solid #ddd',
            paddingBottom: '10px',
          }}
        >
          <PostHeader avatar={userPost.avatar} username={userPost.username} />
          <div>
            <img
              src={photo.url}
              style={{ width: '350px', height: '350px' }}
              alt="Контент"
              data-testid="post-image"
            />
          </div>
          <div style={{ position: 'relative' }}>
            {mode.isViewAllComments ? (
              <Comments comments={comments} />
            ) : (
              <SliceComment
                comment={firstComment}
                handleClick={this.handlerMoreClick}
                isView={mode.isViewFullComment}
              />
            )}
            {message && (
              <span
                style={{
                  position: 'absolute',
                  bottom: '50%',
                  left: '100px',
                  background: 'black',
                  color: 'white',
                  padding: '10px',
                  borderRadius: '10px',
                }}
              >
                {message}
              </span>
            )}
          </div>
          <div
            style={{ cursor: 'pointer', width: '350px', fontSize: '14px' }}
            onClick={this.handleAllCommentsClick}
          >
            <span
              style={{ borderBottom: '1px solid black' }}
              data-testid="post-view-all-comments"
            >
              {mode.isViewAllComments
                ? 'Скрыть все комментарии'
                : 'Посмотреть все комментарии'}
            </span>
          </div>
          {mode.isViewAllComments && (
            <CommentCreator
              value={inputValue}
              handleClick={this.handleSendClick}
              handleOnChange={this.handleInputOnChange}
            />
          )}
        </div>
      </div>
    )
  }
}

export default Post
