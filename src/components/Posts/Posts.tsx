import { Component } from 'react'
import { Photos } from '../App/appTypes'
import Post from '../Post/Post'
import { PostsProps } from './postsTypes'

class Posts extends Component<PostsProps> {
  render() {
    const photos: Photos = this.props.photos
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          margin: '-5px -5px',
        }}
        data-testid="posts"
      >
        {photos && photos.map((photo) => <Post key={photo.id} photo={photo} />)}
      </div>
    )
  }
}

export default Posts
